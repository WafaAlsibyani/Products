import React from "react";

interface IconProps {
  icon: React.ElementType;
  size?: string;
  color?: string;
  withContainer?: boolean;
  className?: string;
  position?: string;
}

const CustomIcon = ({
  icon,
  size = "size-6",
  color = "text-icon-primary",
  withContainer = false,
  className = "",
  position = "",
}: IconProps) => {
  const iconElement = React.createElement(icon, {
    className: `${size} ${color} ${className}`,
  });

  if (!withContainer) {
    return <span className={position}>{iconElement}</span>;
  }

  return (
    <div
      className={`
        ${position}
        bg-surface-hover
        rounded-full
        flex items-center justify-center
        w-10 h-10
      `}
    >
      {iconElement}
    </div>
  );
};

export default CustomIcon;
