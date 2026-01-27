export const getCategoryGroupName = (categoryName: string): string => {
  const lowerCategoryName = categoryName.toLowerCase();

  if (
    lowerCategoryName.includes("mens") ||
    lowerCategoryName.includes("womens") ||
    lowerCategoryName.includes("tops") ||
    lowerCategoryName.includes("shirts") ||
    lowerCategoryName.includes("shoes") ||
    lowerCategoryName.includes("watches") ||
    lowerCategoryName.includes("bags") ||
    lowerCategoryName.includes("dresses") ||
    lowerCategoryName.includes("jewellery")
  ) {
    return "Clothes & Fashion";
  }

  if (
    lowerCategoryName.includes("beauty") ||
    lowerCategoryName.includes("fragrances") ||
    lowerCategoryName.includes("skin-care")
  ) {
    return "Beauty & Care";
  }

  if (
    lowerCategoryName.includes("laptop") ||
    lowerCategoryName.includes("smartphone") ||
    lowerCategoryName.includes("tablet") ||
    lowerCategoryName.includes("mobile")
  ) {
    return "Electronics & Devices";
  }

  if (
    lowerCategoryName.includes("furniture") ||
    lowerCategoryName.includes("home-decoration") ||
    lowerCategoryName.includes("kitchen") ||
    lowerCategoryName.includes("groceries")
  ) {
    return "Home & Lifestyle";
  }

  if (
    lowerCategoryName.includes("motorcycle") ||
    lowerCategoryName.includes("vehicle") ||
    lowerCategoryName.includes("sports") ||
    lowerCategoryName.includes("sunglasses")
  ) {
    return "Vehicles & Sports";
  }

  return "Other";
};

export const getFormattedCategoryLabel = (categoryName: string): string =>
  categoryName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
