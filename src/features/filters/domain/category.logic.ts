import { WOMEN_CATEGORIES, MEN_CATEGORIES } from "../constants/category";
import { CategoryGroup } from "./category.types";

export const getCategoryGroup = (categoryName: string): CategoryGroup => {
  const name = categoryName.toLowerCase();

  if (WOMEN_CATEGORIES.has(name) || MEN_CATEGORIES.has(name)) {
    return "Clothes & Fashion";
  }

  if (
    name.includes("beauty") ||
    name.includes("fragrances") ||
    name.includes("skin-care")
  ) {
    return "Beauty & Care";
  }

  if (
    name.includes("laptop") ||
    name.includes("smartphone") ||
    name.includes("tablet") ||
    name.includes("mobile")
  ) {
    return "Electronics & Devices";
  }

  if (
    name.includes("furniture") ||
    name.includes("home-decoration") ||
    name.includes("kitchen") ||
    name.includes("groceries")
  ) {
    return "Home & Lifestyle";
  }

  if (
    name.includes("sports") ||
    name.includes("vehicle") ||
    name.includes("motorcycle") ||
    name.includes("sunglasses")
  ) {
    return "Vehicles & Sports";
  }

  return "Other";
};

export const formatCategoryLabel = (category: string) =>
  category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
