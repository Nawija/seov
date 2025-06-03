"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, Filter, Search, Star } from "lucide-react";
import { useState } from "react";
import { LiveWebsitePreview } from "./LiveWebsitePreview";

// Types
interface Template {
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

interface TemplateFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBusiness: string;
  setSelectedBusiness: (business: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

type SortOption = "popularne" | "cena-rosnaco" | "cena-malejaco" | "rating";

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

// Random images for templates
const getRandomImage = (category: string): string => {
  const imageCategories = {
    ecommerce: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop",
    ],
    landing: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
    ],
    biznesowa: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    ],
    default: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    ],
  };

  const images =
    imageCategories[category as keyof typeof imageCategories] ||
    imageCategories.default;
  return images[Math.floor(Math.random() * images.length)];
};

const templates: Template[] = [
  {
    id: 1,
    name: "Jarek Olszewski - Fotograf",
    url: "https://jarekolszewski.pl/",
    category: "ecommerce",
    business: "sklep",
    price: 2999,
    rating: 5,
    description:
      "Nowoczesny szablon e-commerce z zaawansowanymi funkcjami sprzedaży",
    features: ["Koszyk", "Płatności", "Panel admina", "SEO"],
    image: getRandomImage("ecommerce"),
  },
  {
    id: 2,
    name: "Żółte tablice",
    url: "https://nazoltej.pl/",
    category: "landing",
    business: "restauracja",
    price: 1990,
    rating: 4.8,
    description: "Elegancki landing page dla restauracji z rezerwacjami online",
    features: ["Rezerwacje", "Menu", "Galeria", "Kontakt"],
    image: getRandomImage("landing"),
  },
  {
    id: 3,
    name: "TechStartup",
    url: "https://nazoltej.pl/",
    category: "biznesowa",
    business: "technologia",
    price: 3990,
    rating: 4.7,
    description: "Profesjonalna strona biznesowa dla firm technologicznych",
    features: ["Portfolio", "Blog", "Zespół", "Kontakt"],
    image: getRandomImage("biznesowa"),
  },
  {
    id: 4,
    name: "MedClinic Plus",
    url: "https://nazoltej.pl/",
    category: "biznesowa",
    business: "medycyna",
    price: 3490,
    rating: 4.9,
    description: "Szablon dla klinik i gabinetów medycznych z systemem wizyt",
    features: ["Wizyty", "Lekarze", "Usługi", "Kontakt"],
    image: getRandomImage("biznesowa"),
  },
  {
    id: 5,
    name: "FitnessHub",
    url: "https://nazoltej.pl/",
    category: "landing",
    business: "fitness",
    price: 2490,
    rating: 4.6,
    description: "Dynamiczny landing page dla siłowni i klubów fitness",
    features: ["Zajęcia", "Trenerzy", "Cennik", "Galeria"],
    image: getRandomImage("landing"),
  },
  {
    id: 6,
    name: "LawFirm Pro",
    url: "https://nazoltej.pl/",
    category: "biznesowa",
    business: "prawnicza",
    price: 3590,
    rating: 4.8,
    description: "Prestiżowy szablon dla kancelarii prawnych",
    features: ["Specjalizacje", "Zespół", "Blog", "Kontakt"],
    image: getRandomImage("biznesowa"),
  },
];
function TemplateFilters({
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
    <div className="mx-auto w-full md:w-80">
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

export function TemplateLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string>("wszystkie");
  const [selectedBusiness, setSelectedBusiness] = useState<string>("wszystkie");
  const [sortBy, setSortBy] = useState<string>("popularne");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const filteredTemplates: Template[] = templates
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
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  return (
    <div className="relative flex flex-col gap-4 px-6 md:flex-row">
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
          onClick={() => setShowFiltersMobile((prev) => !prev)}
          className="bg-brand-main text-background flex items-center gap-2 rounded-r-2xl border p-3 text-sm"
        >
          <Filter className="h-4 w-4" />
        </button>
      </div>

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

      <div className="relative mb-12 flex-1">
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredTemplates.map((template: Template) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="overflow-hidden rounded-xl border bg-white/80"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">
                      {template.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-foreground mb-3 text-xl font-semibold">
                    {template.name}
                  </h3>

                  <p className="text-foreground-light mb-4 line-clamp-2 text-sm">
                    {template.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {template.features.map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="bg-brand-main/10 text-brand-main rounded-full px-2 py-1 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-brand-main text-2xl font-bold">
                      {template.price}zł
                    </span>
                    <div className="flex gap-1 text-xs text-gray-500">
                      <span className="rounded bg-gray-100 px-2 py-1">
                        {template.category}
                      </span>
                      <span className="rounded bg-gray-100 px-2 py-1">
                        {template.business}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setPreviewUrl(template.url);
                        setPreviewTitle(template.name);
                        setShowPreview(true);
                      }}
                      className="group flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200"
                    >
                      <Eye className="h-4 w-4" />
                      Demo
                    </button>
                    <button className="bg-brand-main hover:bg-brand-main/90 group flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition-colors">
                      Zamów
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {showPreview && (
        <LiveWebsitePreview
          url={previewUrl}
          title={previewTitle}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}
