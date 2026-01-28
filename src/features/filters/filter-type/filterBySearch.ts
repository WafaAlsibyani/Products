import { FilterItem } from "../types/filter.types";

export const filterBySearch = <T extends FilterItem>(
  items: T[],
  query: string,
): T[] => {
  if (!query) return items;
  const trimmedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    return item.title?.toLowerCase().startsWith(trimmedQuery);
  });
};
