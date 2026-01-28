import { api } from "../../../services/api";
import { Cart } from "../types/cart";
import { AddToCartPayload } from "../types/cart.payload";

const USER_ID = 1;

/* GET CART */
export const getCartByUser = async (): Promise<Cart | null> => {
  const res = await api.get(`/carts/user/${USER_ID}`);
  return res.data.carts?.[0] ?? null;
};

/* ADD TO CART */
export const addToCart = async (payload: AddToCartPayload): Promise<Cart> => {
  const res = await api.post("/carts/add", {
    userId: USER_ID,
    products: payload.products,
  });

  return res.data;
};

/* UPDATE CART */
export const updateCart = async (
  cartId: number,
  products: { id: number; quantity: number }[],
) => {
  const res = await api.put(`/carts/${cartId}`, {
    products,
  });

  return res.data;
};

/* DELETE CART */
export const deleteCart = async (cartId: number) => {
  const res = await api.delete(`/carts/${cartId}`);
  return res.data;
};
