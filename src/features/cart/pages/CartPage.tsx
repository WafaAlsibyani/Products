import CartItemCard from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import EmptyCart from "../components/EmptyCart";
import { CartItem } from "../../cart/types/cart";
import { useProducts } from "../../products/hooks/useProducts";

import { useCart } from "../hooks/useCart";
import Loading from "../../../component/Loading";
import { useUpdateCart } from "../hooks/useUpdateCart";
import { useDeleteCartItem } from "../hooks/useDeleteCartItem";
import { useDeleteCart } from "../hooks/useDeleteCart";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { data: products = [], isLoading: isProductsLoading } = useProducts();

  const { data: cart, isLoading: isCartLoading } = useCart();
  const { mutate: updateCart } = useUpdateCart();
  const { mutate: removeItem } = useDeleteCartItem();
  const { mutate: removeCart } = useDeleteCart();

  if (isProductsLoading || isCartLoading) return <Loading />;

  if (!cart) return <EmptyCart />;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-8">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* CLEAR BUTTON */}
        <div className="lg:col-span-3 flex justify-end mb-4">
          <button
            onClick={() => removeCart()}
            className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            <Trash2 className="w-5 h-5" />
            <span className="font-bold">Clear Cart</span>
          </button>
        </div>

        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cart.products.map((item: CartItem) => {
            const fullProduct = products.find((p) => p.id === item.id);
            if (!fullProduct) return null;
            return (
              <CartItemCard
                key={item.id}
                product={{
                  ...fullProduct,
                  ...item,
                }}
                quantity={item.quantity}
                onIncrease={() => {
                  updateCart({
                    productId: item.id,
                    quantity: item.quantity + 1,
                  });
                }}
                onDecrease={() => {
                  updateCart({
                    productId: item.id,
                    quantity: item.quantity - 1,
                  });
                }}
                onRemove={() => {
                  removeItem({ productId: item.id });
                }}
              />
            );
          })}
        </div>

        {/*SUMMARY */}
        <CartSummary
          totalItems={cart.totalQuantity}
          totalPrice={cart.discountedTotal}
        />
      </div>
    </div>
  );
};

export default CartPage;
