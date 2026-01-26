import { useEffect, useState } from "react";
import { product } from "../types/product";
import { fetchProductsApi, } from "../services/productsApi";

export function useProducts() {
  const [products, setProducts] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchProductsApi();
      setProducts(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error };
}
