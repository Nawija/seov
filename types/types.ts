//app/szablony/types.ts
export interface TemplatePageSpeed {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface Template {
  id: number;
  name: string;
  slug: string;
  url: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  business: string;
  price: number;
  originalPrice: number;
  pageSpeed: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  features: string[];
}

export interface TemplateData {
  template: Template;
  content: string;
}

export interface TemplateDetailProps {
  template: Template;
  content: string; // Markdown content
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
