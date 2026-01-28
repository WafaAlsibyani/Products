import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = { searchQuery, setSearchQuery };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used inside a SearchProvider");
  }
  return context;
};
