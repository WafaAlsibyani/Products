import { X } from "lucide-react";
import FiltersCheckbox from "../../../component/FiltersCheckbox";
import { useCategoryFilter } from "../../../context/CategoryFilterContext";
import { useCategoryGroups } from "../hooks/useCategoryGroups";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const categoryGroups = useCategoryGroups();
  const { selectedCategories, toggleCategory, toggleCategoryGroup } =
    useCategoryFilter();

  return (
    <>
      {/* الخلفية */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/*  Drawer  */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl
  overflow-y-auto
  transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
`}
      >
        {/* Header  */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Filters</h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <nav className="p-4 space-y-4">
          {Object.entries(categoryGroups).map(([groupName, categoriesList]) => (
            <div key={groupName} className="space-y-2">
              <h3 className="font-bold text-icon-primary">{groupName}</h3>

              <div className="space-y-1 pl-2">
                {categoriesList?.map((category: string) => (
                  <FiltersCheckbox
                    key={category}
                    label={category.replace(/-/g, " ")}
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;
