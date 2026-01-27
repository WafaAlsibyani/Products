import { product } from "../types/product";
import { getProducts } from "../services/productsApi";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery<product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
