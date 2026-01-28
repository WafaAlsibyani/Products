import type { Product } from "../../../types/product";
import { getProducts } from "../services/products.api";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
