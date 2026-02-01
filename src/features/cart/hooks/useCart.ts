import { useQuery } from "@tanstack/react-query";
import { Cart } from "../types/cart";
import { instance } from "../../../services/api";

export const useCart = () => {
  return useQuery<Cart | null>({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await instance.get(`/carts/user/`, {
        params: { userId: 1 },
      });
      const cart = res.data.carts[0];
      return {
        ...cart,
        products: [],
        totalQuantity: 0,
        totalProducts: 0,
        total: 0,
        discountedTotal: 0,
      };
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
