import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../services/cart.api";
import { Cart, CartItem } from "../types/cart";
import { UpdateCartPayload } from "../types/cart.payload";

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UpdateCartPayload) => {
      const currentCart = queryClient.getQueryData<Cart>(["cart"]);
      if (!currentCart) throw new Error("No cart found");

      const updatedProducts: CartItem[] = currentCart.products.map((item) =>
        item.id === payload.productId
          ? { ...item, quantity: payload.quantity }
          : item,
      );
      return updateCart(updatedProducts);
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });
};
