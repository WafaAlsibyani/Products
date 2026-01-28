import { Package, ShoppingBag } from "lucide-react";
import { Button } from "../../../component/Button";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[700px] text-center bg-white rounded-3xl shadow-xl p-12">
      {/* Icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C]/20 to-[#FF6B9D]/20 rounded-full blur-3xl" />
        <div className="relative p-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full">
          <Package className="w-24 h-24 text-[#E91E8C]" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-gray-900 mb-3 font-bold">
        Your cart is empty
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-lg max-w-md mb-8">
        Looks like you haven’t added any items to your cart yet.
      </p>

      {/* Action */}
      <Button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-[#E91E8C] to-[#FF6B9D] hover:from-[#D01B7E] hover:to-[#FF5A8D] text-white px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
        size="lg"
      >
        <ShoppingBag className="w-5 h-5 ml-2" />
        Start Shopping
      </Button>
    </div>
  );
};

export default EmptyCart;
