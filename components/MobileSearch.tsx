//app/szablony/components/MobileSearch.tsx
"use client";

import { Filter, Search } from "lucide-react";

interface MobileSearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  showFiltersMobile: boolean;
  setShowFiltersMobile: (show: boolean) => void;
}

export function MobileSearch({
  searchTerm,
  setSearchTerm,
  showFiltersMobile,
  setShowFiltersMobile,
}: MobileSearchProps) {
  return (
    <div className="mb-4 flex items-center justify-center md:hidden">
      <div className="bg-background relative w-full">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Nazwa szablonu..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          className="focus:ring-brand-main w-full rounded-l-2xl border py-2 pr-4 pl-10 focus:outline-transparent"
        />
      </div>
      <button
        onClick={() => setShowFiltersMobile(!showFiltersMobile)}
        className="bg-brand-main text-background flex items-center gap-2 rounded-r-2xl border p-3 text-sm"
      >
        <Filter className="h-4 w-4" />
      </button>
    </div>
  );
}
