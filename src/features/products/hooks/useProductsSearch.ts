import { searchProducts } from "../services/products.api";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../../../types/product";

const useProductsSearch = (query: string) => {
  return useQuery<Product[]>({
    queryKey: ["search-products", query],
    queryFn: () => searchProducts(query),
    enabled: query.trim().length > 0,
  });
};
export default useProductsSearch;
