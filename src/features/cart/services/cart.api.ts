import { instance } from "../../../services/api";
import { Cart } from "../types/cart";
import { AddToCartPayload } from "../types/cart.payload";

const USER_ID = 1;
const CART_ID = 1;

/* GET CART */
export const getCartByUser = async (): Promise<Cart | null> => {
  const res = await instance.get(`/carts/user/`, {
    params: { userId: USER_ID },
  });
  const cart = res.data.carts[0];
  return {
    ...cart,
    products: [], // 🔥 نفرغها
    totalQuantity: 0,
    totalProducts: 0,
    total: 0,
    discountedTotal: 0,
  };
};

/* ADD TO CART */
export const addToCart = async (payload: AddToCartPayload): Promise<Cart> => {
  const res = await instance.post("/carts/add", {
    userId: USER_ID,
    products: payload.products,
  });

  return res.data;
};

/* UPDATE CART */
export const updateCart = async (
  products: { id: number; quantity: number }[],
): Promise<Cart> => {
  const res = await instance.put(`/carts/${CART_ID}`, {
    // merge: true,
    products,
  });

  return res.data;
};

/* DELETE CART */
export const deleteCart = async (): Promise<Cart> => {
  const res = await instance.delete(`/carts/${CART_ID}`);
  return res.data;
};
