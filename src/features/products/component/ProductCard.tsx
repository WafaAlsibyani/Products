import BaseCard from "../../../component/product-common/BaseCard";
import { CardActions } from "../../../component/product-common/CardActions";
import { PriceBlock } from "../../../component/product-common/PriceBlock";
import ProductImageBox from "../../../component/product-common/ProductImageBox";
import { ProductMeta } from "../../../component/product-common/ProductMeta";
import { ProductTitle } from "../../../component/product-common/ProductTitle";
import { Product } from "../../../types/product";
import { RatingBlock } from "./RatingBlock";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <BaseCard hoverType="strong" className="group overflow-hidden">
      <ProductImageBox
        image={product.thumbnail}
        discount={product.discountPercentage}
        alt={product.title}
        size="lg"
      >
        <CardActions>
          <button className="flex-1 bg-white/90 py-2.5 rounded-xl">View</button>

          <button className="flex-1 bg-gradient-to-r from-[#E91E8C] to-[#FF6B9D] text-white py-2.5 rounded-xl">
            Add
          </button>
        </CardActions>
      </ProductImageBox>

      <div className="p-4 space-y-3">
        <ProductMeta product={product} showStock />

        <ProductTitle title={product.title} />

        <RatingBlock rating={product.rating} stock={product.stock} />

        <PriceBlock product={product} discountVariant="product" />
      </div>
    </BaseCard>
  );
};

export default ProductCard;

// import { useState } from "react";
// import { StarIcon } from "@heroicons/react/24/solid";
// import Icon from "../../../component/Icon";
// import type { Product } from "../../../types/product";

// interface ProductCardProps {
//   product: Product;
// }
// const ProductCard = ({ product }: ProductCardProps) => {
//   const {
//     title,
//     category,
//     brand,
//     rating: rate,
//     stock,
//     thumbnail: src,
//   } = product;

//   const originalPrice = product.price;
//   const discount = product.discountPercentage;
//   const finalPrice = originalPrice * (1 - discount / 100);
//   const savings = originalPrice - finalPrice;

//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="w-full shadow border-2 border-[#F2F3F5] rounded-2xl ">
//       <div className=" bg-linear-to-r from-[#FBF3FC] to-[#F0F6FF] rounded-t-2xl ">
//         <div
//           className="bg-linear-to-r from-[#FA2E49] via-[#F9336A] to-[#F73386]
//         rounded-3xl w-fit p-2 text-text-primary font-bold  absolute m-1 "
//         >
//           {"- " + discount.toFixed(0) + "%"}
//         </div>
//         {!imageLoaded && (
//           <div className="w-full h-40 bg-gray-200 animate-pulse rounded-xl" />
//         )}

//         <img
//           src={src}
//           alt={title}
//           onLoad={() => setImageLoaded(true)}
//           onError={() => setImageLoaded(true)}
//           className={`object-contain w-full h-full transition-opacity duration-300 ${
//             imageLoaded ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="grid grid-cols-2  gap-1 px-3 py-2">
//         <span className="text-[#E91E8C] whitespace-nowrap w-fit text-center px-[9px] py-1 rounded-full bg-[#FFF0F5] border border-[#FAC2DF] capitalize ">
//           {category}
//         </span>
//         <span className="text-[#7D7292] whitespace-nowrap">{brand}</span>
//         <p className="col-span-2 h-12 overflow-hidden leading-6">{title}</p>

//         <div className="flex items-center col-span-2 ">
//           <div className="flex border-[#FFF085] border-2 rounded-2xl px-2 py-1.5 gap-1">
//             <Icon icon={StarIcon} color="text-[#FDC700]" size="size-6" />
//             <span className="text-[#7D7292] whitespace-nowrap ">{rate}</span>
//           </div>
//           <span className="size-1.5 bg-[#7D7292] rounded-full ml-2 mr-1" />
//           <span className="text-[#7D7292] whitespace-nowrap">
//             {stock + " in stock"}
//           </span>
//         </div>
//         <span className="text-2xl font-bold text-black">
//           {finalPrice.toFixed(2)}
//         </span>
//         <span className="text-gray-400 line-through">
//           ${originalPrice.toFixed(2)}
//         </span>
//         <div>saved ${savings.toFixed(2)}</div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
