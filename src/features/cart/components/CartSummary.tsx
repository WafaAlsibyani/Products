import { CreditCard, ArrowLeft, ShoppingBag } from "lucide-react";

import { Button } from "../../../component/Button";
import { Separator } from "../../../component/separator";
import CustomIcon from "../../../component/CustomIcon";
import {
  CART_SUMMARY_TEXT,
  CART_SUMMARY_BADGES,
} from "../constants/cartSummary";
import { getPriceDetails } from "../../../utils/getPriceDetails";

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
  onCheckout?: () => void;
  onContinueShopping?: () => void;
}

const CartSummary = ({
  totalItems,
  totalPrice,
  onCheckout,
  onContinueShopping,
}: CartSummaryProps) => {
  const price = getPriceDetails(totalPrice);
  return (
    <div className="flex justify-end">
      <div className="sticky top-24 w-full max-w-[380px] bg-white rounded-3xl border border-gray-200/60 p-6 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* HEADER */}
        <h3 className="text-xl text-gray-900 flex items-center gap-2 font-bold">
          <CustomIcon icon={ShoppingBag} />
          {CART_SUMMARY_TEXT.title}
        </h3>

        <Separator />

        {/* DETAILS */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>
              {CART_SUMMARY_TEXT.subtotal} ({totalItems} items)
            </span>
            <span className="font-semibold">${price.totalPrice}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>{CART_SUMMARY_TEXT.shipping}</span>
            <span className="text-green-600 font-semibold">Free</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>{CART_SUMMARY_TEXT.tax}</span>
            <span className="font-semibold">${price.taxAmount}</span>
          </div>

          <Separator />

          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-gray-900">
              {CART_SUMMARY_TEXT.total}
            </span>
            <span className="text-3xl font-bold bg-gradient-to-r from-[#E91E8C] to-[#FF6B9D] bg-clip-text text-transparent">
              ${price.totalPrice}
            </span>
          </div>
        </div>

        {/* CHECKOUT */}
        <Button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-[#E91E8C] to-[#FF6B9D] text-white py-7 text-lg shadow-xl hover:shadow-2xl transition-all"
          size="lg"
        >
          <CreditCard className="w-5 h-5 ml-2" />
          {CART_SUMMARY_TEXT.checkout}
        </Button>

        {/* CONTINUE */}
        <Button
          variant="outline"
          onClick={onContinueShopping}
          className="w-full border-2 border-gray-200 hover:border-[#E91E8C] hover:bg-pink-50 py-6"
          size="lg"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          {CART_SUMMARY_TEXT.continue}
        </Button>

        {/* TRUST BADGES */}
        <div className="pt-4 space-y-3 text-sm text-gray-600">
          {CART_SUMMARY_BADGES.map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 ${badge.bg} rounded-full flex items-center justify-center`}
              >
                ✓
              </div>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
