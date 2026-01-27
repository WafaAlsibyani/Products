import React from 'react';

const Icon = ({icon, size = "size-7", color = "text-icon-primary", position = "", withContainer = false}) => {

  const iconElement = React.createElement(icon, {
    className: `${size} ${color} ${position}`,
  });
  return withContainer ? (
    <div className={`bg-surface-hover rounded-full flex items-center justify-center left-4 w-10 h-10 ${position}`}>
      {iconElement}
    </div>
  ) : (
    iconElement
  );
};

export default Icon;
