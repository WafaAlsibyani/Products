import { Product } from "../../../types/product";
import { instance } from "../../../services/api";

export const getProducts = async (): Promise<Product[]> => {
  const response = await instance.get("/products", {
    params: { limit: 200 },
  });
  return response.data.products;
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const trimmed = query.trim();
  if (!trimmed) return [];
  const response = await instance.get(`/products/search`, {
    params: {
      q: trimmed,
    },
  });
  return response.data.products;
};
