interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  hoverType?: "soft" | "strong";
}

const BaseCard = ({
  children,
  className = "",
  hover = true,
  hoverType = "soft",
}: BaseCardProps) => {
  const hoverStyles =
    hoverType === "strong"
      ? "hover:shadow-2xl hover:-translate-y-2 hover:border-[#E91E8C]/30"
      : "hover:shadow-lg";

  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border border-gray-200/60
        transition-all
        duration-300
        ${hover ? hoverStyles : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BaseCard;
