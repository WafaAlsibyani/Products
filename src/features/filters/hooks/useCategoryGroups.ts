import { useMemo } from "react";
import { useProducts } from "../../products/hooks/useProducts";
import { mapCategoriesToGroups } from "../domain/category.mapper";

export function useCategoryGroups() {
  const { data: products = [] } = useProducts();

  const groupedCategories = useMemo(() => {
    if (!products.length) return {};
    const categories = products.map((product) => product.category);

    return mapCategoriesToGroups(categories);
  }, [products]);

  return groupedCategories;
}
