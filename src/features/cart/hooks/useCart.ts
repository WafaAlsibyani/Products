import { useQuery } from "@tanstack/react-query";
import { getCartByUser } from "../services/cart.api";
import { Cart } from "../types/cart";

export const useCart = () => {
  return useQuery<Cart | null>({
    queryKey: ["cart"],
    queryFn: getCartByUser,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
