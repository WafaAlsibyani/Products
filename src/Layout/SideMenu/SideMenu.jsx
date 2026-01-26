import { useState, useMemo } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Icon from "../../component/Icon";
import FiltersCheckbox from "../../component/FiltersCheckbox";
import { useProducts } from "../../hooks/useProducts";
import { useCategoryFilter } from "../../context/CategoryFilterContext";

// كاتيقوري النساء والرجال
const womenCategoryNameSet = new Set([
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
]);

const menCategoryNameSet = new Set([
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "tops",
]);

// تحديد المجموعة الأساسية لكل كاتيقوري
const getCategoryGroupName = (categoryName) => {
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

const getFormattedCategoryLabel = (categoryName) =>
  categoryName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuVisibility = () =>
    setIsMenuOpen((previousState) => !previousState);

  const { products } = useProducts();
  const {
    selectedCategories,
    toggleCategory,
    toggleCategoryGroup,
  } = useCategoryFilter();

  // تقسيم الكاتيقوري حسب المجموعات الكبيرة
  const categorizedGroups = useMemo(() => {
    const categoryGroups = {};

    products.forEach((productItem) => {
      const productCategory = productItem.category;
      const groupName = getCategoryGroupName(productCategory);

      if (!categoryGroups[groupName]) {
        categoryGroups[groupName] = new Set();
      }

      categoryGroups[groupName].add(productCategory);
    });

    return Object.fromEntries(
      Object.entries(categoryGroups).map(([groupName, categorySet]) => [
        groupName,
        Array.from(categorySet).sort(),
      ])
    );
  }, [products]);

  return (
    <>
      {/* زر الفلتر */}
      <button
        onClick={toggleMenuVisibility}
        className="hover:border-2 hover:shadow hover:bg-[#FEEDF4] hover:border-[#FAC8E1] flex items-center rounded-xl p-2.5 gap-1"
      >
        <Icon icon={FunnelIcon} />
        <p className="font-medium text-sm text-[#3E3B3F]">Filters</p>
      </button>

      {/* الخلفية */}
      <div
        onClick={toggleMenuVisibility}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* السايد منيو */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* الهيدر */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button
            onClick={toggleMenuVisibility}
            className="p-1 rounded hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* جسم الفلاتر */}
        <nav className="p-4 space-y-4">
          {Object.entries(categorizedGroups).map(
            ([groupName, categoriesList]) => {
              // معالجة خاصة لمجموعة الملابس
              if (groupName === "Clothes & Fashion") {
                const womenCategories = categoriesList.filter((categoryName) =>
                  womenCategoryNameSet.has(categoryName)
                );
                const menCategories = categoriesList.filter((categoryName) =>
                  menCategoryNameSet.has(categoryName)
                );

                const areAllWomenSelected =
                  womenCategories.length > 0 &&
                  womenCategories.every((categoryName) =>
                    selectedCategories.includes(categoryName)
                  );

                const areAllMenSelected =
                  menCategories.length > 0 &&
                  menCategories.every((categoryName) =>
                    selectedCategories.includes(categoryName)
                  );

                return (
                  <div key={groupName} className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Clothes & Fashion
                    </h3>

                    {/* نساء */}
                    <div className="space-y-1 pl-1">
                      <FiltersCheckbox
                        label="Women (All)"
                        checked={areAllWomenSelected}
                        onChange={() =>
                          toggleCategoryGroup(womenCategories)
                        }
                      />

                      <div className="space-y-1 pl-3">
                        {womenCategories.map((categoryName) => (
                          <FiltersCheckbox
                            key={categoryName}
                            label={getFormattedCategoryLabel(categoryName)}
                            checked={selectedCategories.includes(categoryName)}
                            onChange={() =>
                              toggleCategory(categoryName)
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* رجال */}
                    <div className="mt-3 space-y-1 pl-1">
                      <FiltersCheckbox
                        label="Men (All)"
                        checked={areAllMenSelected}
                        onChange={() => toggleCategoryGroup(menCategories)}
                      />

                      <div className="space-y-1 pl-3">
                        {menCategories.map((categoryName) => (
                          <FiltersCheckbox
                            key={categoryName}
                            label={getFormattedCategoryLabel(categoryName)}
                            checked={selectedCategories.includes(categoryName)}
                            onChange={() =>
                              toggleCategory(categoryName)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // باقي المجموعات زي ما هي
              return (
                <div key={groupName} className="space-y-2">
                  <h3 className="text-sm font-semibold text-[#F9336A]">
                    {groupName}
                  </h3>

                  <div className="space-y-1 pl-2">
                    {categoriesList.map((categoryName) => (
                      <FiltersCheckbox
                        key={categoryName}
                        label={getFormattedCategoryLabel(categoryName)}
                        checked={selectedCategories.includes(categoryName)}
                        onChange={() =>
                          toggleCategory(categoryName)
                        }
                      />
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;
