import { useQuery } from "@tanstack/react-query";
import type { Product } from "../../../types/product";
import { instance } from "../../../services/api";

const useProductsSearch = (query: string) => {
  return useQuery<Product[]>({
    queryKey: ["search-products", query],
    queryFn: async () => {
      const trimmed = query.trim();
      if (!trimmed) return [];
      const response = await instance.get(`/products/search`, {
        params: {
          q: trimmed,
        },
      });
      return response.data.products;
    },
    enabled: query.trim().length > 0,
  });
};
export default useProductsSearch;
