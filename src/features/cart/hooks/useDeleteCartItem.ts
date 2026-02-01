import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveFromCartPayload } from "../types/cart.payload";
import { Cart } from "../types/cart";
import { updateCart } from "../services/cart.api";
export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: RemoveFromCartPayload) => {
      const currentCart = queryClient.getQueryData<Cart>(["cart"]);
      if (!currentCart) throw new Error("No cart found");
      const updatedProducts = currentCart.products.filter(
        (item) => item.id !== payload.productId,
      );
      return updateCart(updatedProducts);
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });
};
