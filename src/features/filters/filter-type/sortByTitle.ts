import { FilterItem } from "../types/filter.types";

export function sortByTitle<T extends FilterItem>(
  items: T[],
  enabled: boolean,
): T[] {
  if (!enabled) return items;

  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}
