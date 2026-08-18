import { list } from './restaurants';

type Restaurant = (typeof list)[number];

export function sortRestaurantsBySuburb(restaurants: Restaurant[] = list): Restaurant[] {
  return [...restaurants].sort((a, b) => a.suburb.localeCompare(b.suburb));
}
