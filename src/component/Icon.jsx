import React from 'react';

const Icon = ({ icon: IconComponent, size = "size-7", color = "text-[#212121]", position = "", withContainer = false }) => {
  return withContainer ? (
    <div className={`bg-[#fceffa] rounded-full items-center justify-center p-1.5 ${position}`}>
      <IconComponent className={`${size} ${color} `} />
    </div>
  ) : (
    <IconComponent className={`${size} ${color} ${position}`} />
  );
};

export default Icon;
