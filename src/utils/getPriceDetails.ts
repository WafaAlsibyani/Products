export function getPriceDetails(
  price: number,
  discountPercentage = 0,
  quantity = 1,
  taxPercentage?: number,
) {
  const hasDiscount = discountPercentage > 0;

  const discountedPrice = hasDiscount
    ? price - (price * discountPercentage) / 100
    : price;

  const savedAmount = hasDiscount ? price - discountedPrice : 0;

  const subtotal = discountedPrice * quantity;

  const hasTax = typeof taxPercentage === "number" && taxPercentage > 0;

  const taxAmount = hasTax ? (subtotal * taxPercentage) / 100 : 0;

  const totalPrice = subtotal + taxAmount;

  return {
    originalPrice: price.toFixed(2),
    discountedPrice: discountedPrice.toFixed(2),
    savedAmount: savedAmount.toFixed(2),

    subtotal: subtotal.toFixed(2),
    taxAmount: taxAmount.toFixed(2),
    totalPrice: totalPrice.toFixed(2),

    hasDiscount,
    hasTax,
  };
}
