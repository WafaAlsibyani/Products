import { product } from "../types/product";
import { useProducts } from "./useProducts";
import { searchProductsApi } from "../services/productsApi";
import React, { useState, useEffect, useRef } from "react";

const useProductsSearch = () => {
  const { products, isLoading, error } = useProducts();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<product[]>([]);
  const [isSearching, setisSearching] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // setisSearching => false
    if (!query.trim()) {
      setSearchResults([]);
      setisSearching(false);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      return;
    }

    // setisSearching => true
    setisSearching(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(async () => {
      try {
        const result = await searchProductsApi(query);
        setSearchResults(result);
      } catch (error) {
        console.error(error);
      } finally {
        setisSearching(false);
      }
    }, 300);
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  const effectiveProducts = query.trim().length > 0 ? searchResults : products;

  return {
    query,
    setQuery,
    products: effectiveProducts,
    isLoading,
    error,
    isSearching,
  };
};

export default useProductsSearch;
