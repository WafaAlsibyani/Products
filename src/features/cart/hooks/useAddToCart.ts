import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services/cart.api";
import { AddToCartPayload } from "../types/cart.payload";
import { Cart } from "../types/cart";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddToCartPayload) => addToCart(payload),
    onSuccess: (newCart: Cart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });
};
