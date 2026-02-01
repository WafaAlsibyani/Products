import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveFromCartPayload } from "../types/cart.payload";
import { Cart } from "../types/cart";
import { instance } from "../../../services/api";

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const res = await instance.delete(`/carts/1`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.setQueryData(["cart"], null);
    },
  });
};
