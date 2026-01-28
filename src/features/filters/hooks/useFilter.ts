import { useMemo } from "react";

import { filterBySearch } from "../filter-type/filterBySearch";
import { filterByCategory } from "../filter-type/filterByCategory";
import { sortByTitle } from "../filter-type/sortByTitle";
import { FilterItem } from "../types/filter.types";

interface UseFilterParams<T> {
  data: T[];
  query: string;
  categories: string[];
}

export function useFilter<T extends FilterItem>({
  data,
  query,
  categories,
}: UseFilterParams<T>) {
  const result = useMemo(() => {
    let filtered = data;
    filtered = filterBySearch(filtered, query);
    filtered = sortByTitle(filtered, query.length > 0);
    filtered = filterByCategory(filtered, categories);

    return filtered;
  }, [data, categories, query]);
  return result;
}
