import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services/cart.api";
import type { AddToCartPayload } from "../types/cart.payload";
import type { Cart, CartItem } from "../types/cart";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: AddToCartPayload) => {
      const currentCart = queryClient.getQueryData<Cart>(["cart"]);

      const existingProducts: CartItem[] = currentCart?.products ?? [];

      const updatedProducts: CartItem[] = [...existingProducts];

      payload.products.forEach((newItem) => {
        const found = updatedProducts.find((p) => p.id === newItem.id);

        if (found) {
          found.quantity += newItem.quantity;
        } else {
          updatedProducts.push({
            id: newItem.id,
            quantity: newItem.quantity,
          });
        }
      });

      return addToCart({
        products: updatedProducts,
      });
    },

    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });
};

// export const useAddToCart = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (payload: AddToCartPayload) => addToCart(payload),
//     onSuccess: (newCart: Cart) => {
//       queryClient.setQueryData(["cart"], newCart);
//     },
//   });
// };
