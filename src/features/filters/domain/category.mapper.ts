import type { CategoryGroup } from "./category.types";
import { getCategoryGroup } from "./category.logic";

export type CategorizedGroups = Record<CategoryGroup, string[]>;

export function mapCategoriesToGroups(categories: string[]): CategorizedGroups {
  const result = {} as CategorizedGroups;

  categories.forEach((categoryName) => {
    const group = getCategoryGroup(categoryName);

    if (!result[group]) {
      result[group] = [];
    }

    if (!result[group].includes(categoryName)) {
      result[group].push(categoryName);
    }
  });

  return result;
}
