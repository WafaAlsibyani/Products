import { product } from "../types/product";

const baseUrl = "https://dummyjson.com/products";

export async function fetchProductsApi(): Promise<product[]> {
  const res = await fetch(`${baseUrl}?limit=200`);
  const data = await res.json();
  return data.products as product[];
}

export async function searchProductsApi(query: string): Promise<product[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];
  const res = await fetch(`${baseUrl}/search?q=${encodeURIComponent(trimmed)}`);
  const data = await res.json();
  return data.products as product[];
}
// export async function getProductsCategory() {
//   const res = await fetch(`${baseUrl}/category/`);
//   const data = await res.json();
//   return data.products as product[];
// }
