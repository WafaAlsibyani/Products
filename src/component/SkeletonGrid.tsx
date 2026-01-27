import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { product } from "../types/product";

interface SearchSkeletonGridProps {
  products?: product[];
}

function SearchSkeletonGrid({ products = [] }: SearchSkeletonGridProps) {
  const SKELETON_COUNT = 12;
  const items = Array.from({ length: products.length || SKELETON_COUNT });

  return (
    <SkeletonTheme baseColor="#f7ecff" highlightColor="#fbf7ff">
      <main className="px-6 py-10 bg-[#fff7ff] min-h-[60vh]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((_, index) => (
            <div
              key={index}
              className="space-y-3 rounded-2xl p-4 border border-[#f2f3f5] bg-white shadow-sm"
            >
              {/* صورة المنتج */}
              <Skeleton height={220} borderRadius={24} />

              {/* قسم التاج (مثلاً category) */}
              <Skeleton height={16} width="40%" borderRadius={8} />

              {/* العنوان */}
              <Skeleton height={24} width="80%" borderRadius={8} />

              {/* اسم العلامة */}
              <Skeleton height={16} width="60%" borderRadius={8} />

              {/* تقييم + مخزون */}
              <div className="flex items-center gap-2 mt-2">
                <Skeleton circle={true} height={20} width={20} />
                <Skeleton height={16} width="10%" borderRadius={8} />
                <Skeleton height={16} width="30%" borderRadius={8} />
              </div>

              {/* الأسعار */}
              <div className="mt-2 space-y-1">
                <Skeleton height={28} width="40%" borderRadius={8} />
                <Skeleton height={20} width="30%" borderRadius={8} />
                <Skeleton height={16} width="50%" borderRadius={8} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </SkeletonTheme>
  );
}

export default SearchSkeletonGrid;
