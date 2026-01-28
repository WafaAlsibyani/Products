import { Product } from "../../types/product";

interface ProductMetaProps {
  product: Product;
  showStock?: boolean;
}

export function ProductMeta({ product, showStock = false }: ProductMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Category */}
      <span
        className="text-xs bg-gradient-to-r from-[#E91E8C]/10 to-[#FF6B9D]/10
        text-[#E91E8C] px-3 py-1 rounded-lg capitalize border border-[#E91E8C]/20"
      >
        {product.category}
      </span>

      {/* Brand */}
      <span className="text-xs text-gray-500">{product.brand}</span>

      {/* Stock */}
      {showStock && product.stock > 0 && (
        <span className="text-xs text-gray-500">
          • {product.stock} in stock
        </span>
      )}

      {showStock && product.stock === 0 && (
        <span className="text-xs text-red-500 font-semibold">Out of stock</span>
      )}
    </div>
  );
}
