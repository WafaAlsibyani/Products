import { cn } from "../../utils/utils";

interface ProductTitleProps {
  title: string;
  size?: "sm" | "md" | "lg";
  hover?: boolean;
}

export function ProductTitle({
  title,
  size = "md",
  hover = false,
}: ProductTitleProps) {
  return (
    <h3
      className={cn(
        "text-gray-900 line-clamp-2 transition-colors",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg font-semibold",
        hover && "group-hover:text-[#E91E8C]",
      )}
    >
      {title}
    </h3>
  );
}
