//app/szablony/components/TemplateFilters.tsx
"use client";

import type { SortOption, TemplateFiltersProps } from "@/types/types";
import { Filter, Search } from "lucide-react";

const categories: string[] = ["wszystkie", "ecommerce", "landing", "biznesowa"];
const businesses: string[] = [
  "wszystkie",
  "sklep",
  "restauracja",
  "technologia",
  "medycyna",
  "fitness",
  "prawnicza",
];

export function TemplateFilters({
  selectedCategory,
  setSelectedCategory,
  selectedBusiness,
  setSelectedBusiness,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
}: TemplateFiltersProps) {
  return (
    <div className="mx-auto w-full">
      <div className="sticky top-6 rounded-xl border bg-white/80 p-6">
        <div className="mb-6 flex items-center gap-2">
          <Filter className="text-brand-main h-5 w-5" />
          <h2 className="text-xl font-semibold">Filtry</h2>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">Szukaj</label>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Nazwa szablonu..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="focus:ring-brand-main w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Sortuj według
          </label>
          <select
            value={sortBy}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortBy(e.target.value as SortOption)
            }
            className="focus:ring-brand-main w-full rounded-lg border p-2 focus:ring-2"
          >
            <option value="popularne">Najpopularniejsze</option>
            <option value="cena-rosnaco">Cena: rosnąco</option>
            <option value="cena-malejaco">Cena: malejąco</option>
            <option value="rating">Najwyżej oceniane</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">Kategoria</label>
          <div className="space-y-2">
            {categories.map((category: string) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSelectedCategory(e.target.value)
                  }
                  className="text-brand-main focus:ring-brand-main mr-2"
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Business Filter */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Rodzaj biznesu
          </label>
          <div className="space-y-2">
            {businesses.map((business: string) => (
              <label key={business} className="flex items-center">
                <input
                  type="radio"
                  name="business"
                  value={business}
                  checked={selectedBusiness === business}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSelectedBusiness(e.target.value)
                  }
                  className="text-brand-main focus:ring-brand-main mr-2"
                />
                <span className="capitalize">{business}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
