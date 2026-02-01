export type AddToCartPayload = {
  products: {
    id: number;
    quantity: number;
  }[];
};

export type UpdateCartPayload = {
  productId: number;
  quantity: number;
};

export type RemoveFromCartPayload = {
  productId: number;
};
