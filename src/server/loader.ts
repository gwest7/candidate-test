import type { RestaurantDetails } from './api';

const TTL_MS = 10 * 60 * 1000; // 10 minutes

interface CacheEntry {
  value: RestaurantDetails;
  expiresAt: number;
}

type Listener = (id: number, value: RestaurantDetails) => void;

/**
 * Shared cache + de-duplication layer so overlapping requests from
 * multiple front-ends don't each trigger their own call to mrdfood.com.
 */
export class RestaurantLoader {
  private static instance: RestaurantLoader | undefined;

  private cache = new Map<number, CacheEntry>();
  private inFlight = new Map<number, Promise<RestaurantDetails>>();
  private listeners: Listener[] = [];

  private constructor() {}

  static getInstance(): RestaurantLoader {
    if (!RestaurantLoader.instance) {
      RestaurantLoader.instance = new RestaurantLoader();
    }
    return RestaurantLoader.instance;
  }

  async getOrFetch(
    id: number,
    fetcher: (id: number) => Promise<RestaurantDetails>,
  ): Promise<RestaurantDetails> {
    const cached = this.cache.get(id);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.value;
    }

    const pending = this.inFlight.get(id);
    if (pending) {
      return pending;
    }

    const promise = fetcher(id)
      .then((value) => {
        this.cache.set(id, { value, expiresAt: Date.now() + TTL_MS });
        this.notify(id, value);
        return value;
      })
      .finally(() => {
        this.inFlight.delete(id);
      });

    this.inFlight.set(id, promise);
    return promise;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  invalidate(id: number): void {
    this.cache.delete(id);
  }

  private notify(id: number, value: RestaurantDetails): void {
    for (const listener of this.listeners) {
      listener(id, value);
    }
  }
}
