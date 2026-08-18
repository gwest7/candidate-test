type Task<R> = () => Promise<R>;

interface QueuedTask<R> {
  task: Task<R>;
  priority: number;
  resolve: (value: R) => void;
  reject: (reason?: unknown) => void;
}

/**
 * General-purpose concurrency-limited task runner.
 * Supports pausing/resuming the queue and priority ordering.
 */
export class ConcurrencyPool<R = unknown> {
  private limit = 1;
  private active = 0;
  private paused = false;
  private queue: QueuedTask<R>[] = [];
  private progressListeners: Array<(completed: number, total: number) => void> = [];
  private completed = 0;
  private total = 0;

  setLimit(limit: number): void {
    // TODO: update the concurrency limit and re-drain the queue if it increased
  }

  add(task: Task<R>, priority = 0): Promise<R> {
    // TODO: enqueue the task (respecting priority) and kick off draining
    throw new Error('not implemented');
  }

  pause(): void {
    // TODO: stop starting new tasks until resume() is called
  }

  resume(): void {
    // TODO: resume draining the queue
  }

  onProgress(listener: (completed: number, total: number) => void): void {
    // TODO: register a listener invoked as tasks complete
  }

}

