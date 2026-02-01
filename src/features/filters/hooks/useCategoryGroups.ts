import { useMemo } from "react";
import { useProducts } from "../../products/hooks/useProducts";
import { mapCategoriesToGroups } from "../domain/category.mapper";
import type { CategoryGroups } from "../types/category.types";

export function useCategoryGroups(): CategoryGroups {
  const { data: products = [] } = useProducts();

  const groupedCategories = useMemo<CategoryGroups>(() => {
    if (!products.length) return {};
    const categories = products.map((product) => product.category);

    return mapCategoriesToGroups(categories);
  }, [products]);

  return groupedCategories;
}
