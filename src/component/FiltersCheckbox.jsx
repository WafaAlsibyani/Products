import React, { useState } from "react";

const FiltersCheckbox = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="size-4 appearance-none
                 rounded-full border border-gray-300
                  transition  bg-white
                checked:bg-[#f733856b]  
                checked:border-[#F73386]
                  checked:border-2 "
            />
            <span className="text-sm text-[#3E3B3F]">{label}</span>
        </label>
    );
};

export default FiltersCheckbox;
// from-[#FA2E49] via-[#F9336A] to-[#F73386]