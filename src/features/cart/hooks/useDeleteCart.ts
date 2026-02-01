import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveFromCartPayload } from "../types/cart.payload";
import { Cart } from "../types/cart";
import { deleteCart, updateCart } from "../services/cart.api";
export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteCart(),
    onSuccess: () => {
      queryClient.setQueryData(["cart"], null);
    },
  });
};
