import { Minus, Plus, Trash2 } from "lucide-react";
import BaseCard from "../../../component/product-common/BaseCard";
import ProductImageBox from "../../../component/product-common/ProductImageBox";
import { ProductMeta } from "../../../component/product-common/ProductMeta";
import { ProductTitle } from "../../../component/product-common/ProductTitle";
import { PriceBlock } from "../../../component/product-common/PriceBlock";
// import { Product } from "../../../types/product";
import { Product } from "../../../types/product";

interface CartItemCardProps {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItemCard = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) => {
  return (
    <BaseCard hoverType="soft" className="p-5 flex gap-5">
      {/* IMAGE */}
      <ProductImageBox
        image={product.thumbnail}
        discount={product.discountPercentage}
        alt={product.title}
        size="md"
      />

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between">
        {/* TOP */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <ProductTitle title={product.title} />
            <ProductMeta product={product} />
          </div>

          <button onClick={onRemove} className="p-2 rounded-lg hover:bg-red-50">
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between mt-4">
          {/* QUANTITY */}
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5">
            <button onClick={onDecrease} disabled={quantity <= 1}>
              <Minus className="w-4 h-4 text-gray-600" />
            </button>

            <span className="min-w-[2rem] text-center font-semibold">
              {quantity}
            </span>

            <button onClick={onIncrease}>
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* PRICE */}
          <PriceBlock product={product} quantity={quantity} />
        </div>
      </div>
    </BaseCard>
  );
};

export default CartItemCard;
