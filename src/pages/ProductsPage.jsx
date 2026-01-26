// ProductsPage.jsx
import React, {Suspense, useMemo} from "react";
import {useProducts} from "../hooks/useProducts";
import {useSearch} from "../context/SearchContext";
import Loading from "../component/Loading";
import ErrorMessage from "../component/ErrorMessage";
import {useCategoryFilter} from "../context/CategoryFilterContext"; // ⬅️ الجديد

// Lazy components
const SkeletonGrid = React.lazy(() => import("../component/SkeletonGrid"))
const ProductCard = React.lazy(() => import("../component/ProductCard"))

const ProductsPage = () => {
    const {products, isLoading, error} = useProducts();
    const {searchQuery} = useSearch();
    const {selectedCategories} = useCategoryFilter();

    const normalizedQuery = searchQuery.toLowerCase().trim();
    // const filteredBySearch  = normalizedQuery
    //     ? products
    //         .filter(
    //             (p) =>
    //                 p.title.toLowerCase().includes(normalizedQuery) ||
    //                 p.category.toLowerCase().includes(normalizedQuery)
    //         )
    //         .sort((a, b) => a.title.localeCompare(b.title))
    //     : products;

    const filteredBySearch = useMemo(() => {
        if (!normalizedQuery) return products;

        return products
            .filter(
                (p) =>
                    p.title.toLowerCase().includes(normalizedQuery) ||
                    p.category.toLowerCase().includes(normalizedQuery)
            )
            .sort((a, b) => a.title.localeCompare(b.title));
    }, [products, normalizedQuery]);
    const visibleProducts = useMemo(() => {
        if (!selectedCategories.length) return filteredBySearch;

        return filteredBySearch.filter((p) =>
            selectedCategories.includes(p.category)
        );
    }, [filteredBySearch, selectedCategories]);

    if (error) {return <ErrorMessage />;}
    return (
        <main className="p-6">
            <Suspense fallback={<Loading />}>
                {isLoading ? (
                    <SkeletonGrid products={products} />
                ) : visibleProducts.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    <div className="grid items-center justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {visibleProducts.map((p) => (
                            <ProductCard
                                key={p.id}
                                src={p.thumbnail}
                                category={p.category}
                                brand={p.brand}
                                title={p.title}
                                rate={p.rating}
                                stock={p.stock}
                                price={p.price}
                                discountPercentage={p.discountPercentage}
                            />
                        ))}
                    </div>
                )}
            </Suspense>
        </main>
    );
};

export default ProductsPage;
