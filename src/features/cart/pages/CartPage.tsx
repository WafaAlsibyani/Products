import CartItemCard from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import EmptyCart from "../components/EmptyCart";
// import { Cart } from "../../cart/types/cart";
import { useProducts } from "../../products/hooks/useProducts";

import { useCart } from "../hooks/useCart";
import Loading from "../../../component/Loading";

const CartPage = () => {
  const { data: cart, isLoading } = useCart();
  const { data: products } = useProducts();

  if (isLoading) return <Loading />;

  if (!cart) return <EmptyCart />;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-8">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cart.products.map((item) => {
            const fullProduct = products?.find((p) => p.id === item.id);
            if (!fullProduct) return null;
            return (
              <CartItemCard
                key={item.id}
                product={{
                  ...fullProduct,
                  ...item,
                }}
                quantity={item.quantity}
                onIncrease={() => {}}
                onDecrease={() => {}}
                onRemove={() => {}}
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
