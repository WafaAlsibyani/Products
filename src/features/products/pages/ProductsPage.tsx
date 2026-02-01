// ProductsPage.jsx
import React, { Suspense } from "react";
import { useProducts } from "../hooks/useProducts";
import useSearchProducts from "../hooks/useProductsSearch";
import Loading from "../../../component/Loading";
import ErrorMessage from "../../../component/ErrorMessage";
import { useCategoryFilter } from "../../../context/CategoryFilterContext";
import { useDebounce } from "../../../hooks/useDebounce";
import { useFilter } from "../../filters/hooks/useFilter";
import { useSearchParams } from "react-router-dom";

// Lazy components
const SkeletonGrid = React.lazy(
  () => import("../../../component/SkeletonGrid"),
);
const ProductCard = React.lazy(() => import("../component/ProductCard"));

const ProductsPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q") ?? "";
  const { selectedCategories } = useCategoryFilter();
  const debouncedQuery = useDebounce(query, 300);
  const normalizedQuery = debouncedQuery.toLowerCase().trim();

  const { data: products = [], isLoading, error } = useProducts();
  const { data: searchedProducts = [], isLoading: isSearching } =
    useSearchProducts(debouncedQuery);

  const visibleProducts = useFilter({
    data: normalizedQuery.length > 0 ? searchedProducts : products,
    query: normalizedQuery,
    categories: selectedCategories,
  });

  const isFetching =
    isLoading ||
    isSearching ||
    (normalizedQuery.length > 0
      ? searchedProducts.length === 0
      : products.length === 0);

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <main className="p-6">
      <Suspense fallback={<Loading />}>
        {isFetching ? (
          <SkeletonGrid products={products} />
        ) : visibleProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid items-center justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {visibleProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </Suspense>
    </main>
  );
};

export default ProductsPage;
