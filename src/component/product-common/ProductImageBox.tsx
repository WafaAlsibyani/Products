import { ReactNode } from "react";

interface ProductImageBoxProps {
  image: string;
  alt?: string;
  discount?: number;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-32 h-32",
  lg: "h-60",
};

export default function ProductImageBox({
  image,
  alt = "",
  discount = 0,
  size = "md",
  children,
}: ProductImageBoxProps) {
  return (
    <div
      className={`
        relative
        ${sizeClasses[size]}
        bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50
        rounded-top-xl
        overflow-hidden
        flex items-center justify-center
      `}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
      />

      {/* DARK OVERLAY ON HOVER */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* DISCOUNT BADGE */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-text-primary font-semibold px-2.5 py-1 rounded-xl z-10">
          -{discount.toFixed(0)}%
        </div>
      )}

      {/* HOVER ACTIONS */}
      {children}
    </div>
  );
}
