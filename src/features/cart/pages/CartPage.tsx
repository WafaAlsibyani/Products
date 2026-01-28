import CartItemCard from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import EmptyCart from "../components/EmptyCart";
import { Product } from "../../../types/product";

const mockProduct: Product = {
  id: 1,
  title: "Wireless Headphones",
  description: "",
  price: 120,
  discountPercentage: 20,
  rating: 4.5,
  stock: 12,
  brand: "Sony",
  category: "electronics",
  thumbnail: "https://cdn.dummyjson.com/product-images/2/1.jpg",
};

const CartPage = () => {
  const cartItems = [
    {
      product: mockProduct,
      quantity: 2,
    },
  ];

  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-8">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* LEFT - ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <CartItemCard
              key={index}
              product={item.product}
              quantity={item.quantity}
              onIncrease={function (): void {
                throw new Error("Function not implemented.");
              }}
              onDecrease={function (): void {
                throw new Error("Function not implemented.");
              }}
              onRemove={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <CartSummary totalItems={0} totalPrice={0} />
      </div>
    </div>
  );
};

export default CartPage;
