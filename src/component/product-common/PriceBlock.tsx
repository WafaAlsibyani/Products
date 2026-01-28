import { Product } from "../../types/product";
import { getPriceDetails } from "../../utils/getPriceDetails";

interface PriceBlockProps {
  product: Product;
  quantity?: number;
  size?: "sm" | "md" | "lg";
  discountVariant?: "product" | "cart";
}

export function PriceBlock({
  product,
  quantity = 1,
  size = "md",
  discountVariant = "cart",
}: PriceBlockProps) {
  const price = getPriceDetails(
    product.price,
    product.discountPercentage,
    quantity,
  );

  const discountStyle =
    discountVariant === "product"
      ? "text-sm font-semibold"
      : "text-xs font-medium";

  return (
    <div className="flex flex-col gap-1">
      {/* PRICE */}
      <div className="flex items-baseline gap-2">
        <span
          className={`
            bg-gradient-to-r from-[#E91E8C] to-[#FF6B9D]
            bg-clip-text text-transparent font-bold
            ${size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl"}
          `}
        >
          ${price.totalPrice}
        </span>

        {product.discountPercentage > 0 && (
          <span className="text-sm text-gray-400 line-through">
            ${price.originalPrice}
          </span>
        )}
      </div>

      {/* DISCOUNT */}
      {product.discountPercentage > 0 && quantity === 1 && (
        <span className={`text-green-600 ${discountStyle}`}>
          Save ${price.savedAmount}
        </span>
      )}
    </div>
  );
}
