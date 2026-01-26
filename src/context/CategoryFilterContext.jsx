// src/context/CategoryFilterContext.jsx
import { createContext, useContext, useState } from "react";
import { toggleArrayItem } from "../utils/toggleArrayItem";

const CategoryFilterContext = createContext(null);

export const CategoryFilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (categoryName) => {
    setSelectedCategories((previousSelected) =>
      toggleArrayItem(previousSelected, categoryName)
    );
  };

  // هذه للفلاتر اللي تختار "مجموعة" كاملة (مثل: نساء، رجال)
  const toggleCategoryGroup = (categoryNames) => {
    setSelectedCategories((previousSelected) => {
      const areAllGroupCategoriesSelected = categoryNames.every(
        (categoryName) => previousSelected.includes(categoryName)
      );

      if (areAllGroupCategoriesSelected) {
        // إذا كلها محددة → نشيلها
        return previousSelected.filter(
          (categoryName) => !categoryNames.includes(categoryName)
        );
      }

      // إذا مو كلها محددة → نضيف الناقصة ونخلي الباقي
      const updatedSelected = [...previousSelected];

      categoryNames.forEach((categoryName) => {
        if (!updatedSelected.includes(categoryName)) {
          updatedSelected.push(categoryName);
        }
      });

      return updatedSelected;
    });
  };

  const value = {
    selectedCategories,
    toggleCategory,
    toggleCategoryGroup,
  };

  return (
    <CategoryFilterContext.Provider value={value}>
      {children}
    </CategoryFilterContext.Provider>
  );
};

export const useCategoryFilter = () => {
  const contextValue = useContext(CategoryFilterContext);
  if (!contextValue) {
    throw new Error(
      "useCategoryFilter must be used within a CategoryFilterProvider"
    );
  }
  return contextValue;
};
