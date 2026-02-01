import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Cart, CartItem } from "../types/cart";
import { UpdateCartPayload } from "../types/cart.payload";
import { instance } from "../../../services/api";

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
      const res = await instance.put(`/carts/1`, {
        products: updatedProducts,
      });
      return res.data;
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });
};
