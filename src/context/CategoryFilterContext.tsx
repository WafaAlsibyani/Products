// src/context/CategoryFilterContext.jsx
import { createContext, ReactNode, useContext, useState } from "react";
import { CategoryName } from "../features/filters/domain/category.types";
import { toggleArrayItem } from "../utils/toggleArrayItem";

interface CategoryFilterContextType {
  selectedCategories: CategoryName[];
  toggleCategory: (categoryName: CategoryName) => void;
  toggleCategoryGroup: (categoryNames: CategoryName[]) => void;
}

const CategoryFilterContext = createContext<CategoryFilterContextType | null>(
  null,
);

interface ProviderProps {
  children: ReactNode;
}

export const CategoryFilterProvider = ({ children }: ProviderProps) => {
  const [selectedCategories, setSelectedCategories] = useState<CategoryName[]>(
    [],
  );

  const toggleCategory = (categoryName: CategoryName) => {
    setSelectedCategories((previousSelected) =>
      toggleArrayItem(previousSelected, categoryName),
    );
  };

  // هذه للفلاتر اللي تختار "مجموعة" كاملة (مثل: نساء، رجال)
  const toggleCategoryGroup = (categoryNames: CategoryName[]) => {
    setSelectedCategories((previousSelected) => {
      const areAllGroupCategoriesSelected = categoryNames.every(
        (categoryName) => previousSelected.includes(categoryName),
      );

      if (areAllGroupCategoriesSelected) {
        // إذا كلها محددة → نشيلها
        return previousSelected.filter(
          (categoryName) => !categoryNames.includes(categoryName),
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
      "useCategoryFilter must be used within a CategoryFilterProvider",
    );
  }
  return contextValue;
};
