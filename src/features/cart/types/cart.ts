import { Product } from "../../../types/product";

export type CartProduct = Product & {
  quantity: number;
  total: number;
  discountedPrice: number;
};

export type Cart = {
  id: number;
  userId: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
};
