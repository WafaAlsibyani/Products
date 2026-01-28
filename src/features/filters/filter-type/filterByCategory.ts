import { FilterItem } from "../types/filter.types";

export function filterByCategory<T extends FilterItem>(
  items: T[],
  categories: string[],
): T[] {
  if (categories.length === 0) return items;

  return items.filter((item) => categories.includes(item.category));
}
