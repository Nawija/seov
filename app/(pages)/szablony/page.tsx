"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, Filter, Search, Star } from "lucide-react";
import { useState } from "react";
import { TemplateLayout } from "./TemplateLayout";

// Sample templates data
const templates = [
  {
    id: 1,
    name: "ModernShop Pro",
    category: "ecommerce",
    business: "sklep",
    price: 299,
    rating: 4.9,
    description:
      "Nowoczesny szablon e-commerce z zaawansowanymi funkcjami sprzedaży",
    features: ["Koszyk", "Płatności", "Panel admina", "SEO"],
  },
  {
    id: 2,
    name: "RestaurantElite",
    category: "landing",
    business: "restauracja",
    price: 199,
    rating: 4.8,
    description: "Elegancki landing page dla restauracji z rezerwacjami online",
    features: ["Rezerwacje", "Menu", "Galeria", "Kontakt"],
  },
  {
    id: 3,
    name: "TechStartup",
    category: "biznesowa",
    business: "technologia",
    price: 399,
    rating: 4.7,
    description: "Profesjonalna strona biznesowa dla firm technologicznych",
    features: ["Portfolio", "Blog", "Zespół", "Kontakt"],
  },
  {
    id: 4,
    name: "MedClinic Plus",
    category: "biznesowa",
    business: "medycyna",
    price: 349,
    rating: 4.9,
    description: "Szablon dla klinik i gabinetów medycznych z systemem wizyt",
    features: ["Wizyty", "Lekarze", "Usługi", "Kontakt"],
  },
  {
    id: 5,
    name: "FitnessHub",
    category: "landing",
    business: "fitness",
    price: 249,
    rating: 4.6,
    description: "Dynamiczny landing page dla siłowni i klubów fitness",
    features: ["Zajęcia", "Trenerzy", "Cennik", "Galeria"],
  },
  {
    id: 6,
    name: "LawFirm Pro",
    category: "biznesowa",
    business: "prawnicza",
    price: 459,
    rating: 4.8,
    description: "Prestiżowy szablon dla kancelarii prawnych",
    features: ["Specjalizacje", "Zespół", "Blog", "Kontakt"],
  },
];

const categories = ["wszystkie", "ecommerce", "landing", "biznesowa"];
const businesses = [
  "wszystkie",
  "sklep",
  "restauracja",
  "technologia",
  "medycyna",
  "fitness",
  "prawnicza",
];





export default function Szablony() {
  return (
    <>
      <div className="min-h-screen p-4">
        <div className="mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-18 mt-6 px-5 text-center"
          >
            <h1 className="text-foreground mb-4 text-4xl font-bold lg:text-6xl">
              Szablony Stron
            </h1>
            <p className="text-foreground-light mx-auto max-w-2xl text-xl">
              Profesjonalne szablony Next.js gotowe do użycia. Znajdź idealny
              szablon dla swojego biznesu.
            </p>
          </motion.div>

          <TemplateLayout />
        </div>
      </div>
    </>
  );
}
