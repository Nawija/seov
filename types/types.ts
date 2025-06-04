//app/szablony/types.ts
export interface Template {
  id: number;
  name: string;
  url: string;
  category: string;
  business: string;
  price: number;
  rating: number;
  description: string;
  features: string[];
  image: string;
}

export interface TemplateFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBusiness: string;
  setSelectedBusiness: (business: string) => void;
 sortBy: SortOption; 
  setSortBy: (sortBy: SortOption) => void; 
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export type SortOption =
  | "popularne"
  | "cena-rosnaco"
  | "cena-malejaco"
  | "rating";
