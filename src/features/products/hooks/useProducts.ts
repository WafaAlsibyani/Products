import { instance } from "../../../services/api";
import type { Product } from "../../../types/product";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await instance.get("/products", {
        params: { limit: 200 },
      });
      return response.data.products;
    },
  });
}
