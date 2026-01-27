import { product } from "../types/product";
import { api } from "./axios";

export const getProducts = async () => {
  const response = await api.get("/products?limit=200");
  return response.data.products as product[];
};

// export async function searchProductsApi(query: string): Promise<product[]> {
//   const trimmed = query.trim();
//   if (!trimmed) return [];
//   const res = await fetch(`${baseUrl}/search?q=${encodeURIComponent(trimmed)}`);
//   const data = await res.json();
//   return data.products as product[];
// }
// export async function getProductsCategory() {
//   const res = await fetch(`${baseUrl}/category/`);
//   const data = await res.json();
//   return data.products as product[];
// }
