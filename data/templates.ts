//app/szablony/data/templates.ts
import type { Template } from "@/types/types";

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

export const templates: Template[] = [
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
