import { Product } from "../types/product";
import { api } from "../../../services/axios";

export const getProducts = async () => {
  const response = await api.get("?limit=200");
  return response.data.products as Product[];
};

export const searchProducts = async (query: string) => {
  const trimmed = query.trim();
  const response = await api.get(`/search?q=${encodeURIComponent(trimmed)}`);
  return response.data.products as Product[];
};
