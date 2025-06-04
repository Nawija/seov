//app/szablony/components/TemplatesClient.tsx
"use client";

import { useState } from "react";
import type { SortOption, Template } from "@/types/types";
import { MobileSearch } from "@/components/MobileSearch";
import { TemplateFilters } from "./TemplateFilters";
import { TemplateGrid } from "./TemplateGrid";

interface TemplatesClientProps {
  initialTemplates: Template[];
}

export function TemplatesClient({ initialTemplates }: TemplatesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("wszystkie");
  const [selectedBusiness, setSelectedBusiness] = useState<string>("wszystkie");
  const [sortBy, setSortBy] = useState<SortOption>("popularne");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const filteredTemplates: Template[] = initialTemplates
    .filter((template: Template) => {
      if (
        selectedCategory !== "wszystkie" &&
        template.category !== selectedCategory
      )
        return false;
      if (
        selectedBusiness !== "wszystkie" &&
        template.business !== selectedBusiness
      )
        return false;
      if (
        searchTerm &&
        !template.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a: Template, b: Template) => {
      switch (sortBy) {
        case "cena-rosnaco":
          return a.price - b.price;
        case "cena-malejaco":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return b.rating - a.rating; // popularne
      }
    });

  return (
    <div className="relative flex flex-col gap-4 px-6 md:flex-row">
      <MobileSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFiltersMobile={showFiltersMobile}
        setShowFiltersMobile={setShowFiltersMobile}
      />

      {/* Filters - mobile view */}
      {showFiltersMobile && (
        <div className="block w-full md:hidden">
          <TemplateFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBusiness={selectedBusiness}
            setSelectedBusiness={setSelectedBusiness}
            sortBy={sortBy}
            setSortBy={setSortBy}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      )}

      {/* Filters - desktop view */}
      <div className="hidden w-full max-w-xs md:block">
        <TemplateFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBusiness={selectedBusiness}
          setSelectedBusiness={setSelectedBusiness}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <TemplateGrid templates={filteredTemplates} />
    </div>
  );
}
