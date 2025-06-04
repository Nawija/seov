"use client";
import { MainBtn } from "@/components/buttons/MainBtn";
import { SecondBtn } from "@/components/buttons/SecondBtn";
import MarkdownContent from "@/components/MarkdownContent";
import { Template } from "@/types/types";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Eye,
  Heart,
  Share2,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TemplateDetailProps {
  template: Template;
  content: string;
}

const TemplateDetail = ({ template, content }: TemplateDetailProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="anim-opacity min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Sticky Navigation */}

      <div className="container mx-auto px-4 py-4">
        <Link href="/szablony" className="group inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Powrót do szablonów</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Section with Enhanced UI */}
          <div className="group relative h-max">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tl from-blue-300 to-purple-400 opacity-20 blur transition-opacity group-hover:opacity-30" />
            <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  height={400}
                  width={700}
                  src={template.image}
                  alt={template.name}
                  className={`h-auto w-full object-contain transition-all duration-700 ${
                    imageLoaded
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Rating Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <span className="text-sm font-semibold">{template.rating}</span>
                <span className="text-xs text-gray-500">
                  ({template.reviews})
                </span>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-6 left-6 flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`rounded-full p-2 shadow-lg backdrop-blur-sm transition-all ${
                    isLiked
                      ? "bg-red-500 text-white"
                      : "bg-white/95 text-gray-600 hover:bg-white"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                  />
                </button>
                <button className="rounded-full bg-white/95 p-2 text-gray-600 shadow-lg backdrop-blur-sm transition-colors hover:bg-white">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-6">
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {template.category}
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                {template.business}
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                Premium
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="mb-4 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
                {template.name}
              </h1>
              <p className="pr-6 text-xl leading-relaxed text-gray-600">
                {template.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-blue-600">
                {template.price}zł
              </div>
              {template.originalPrice > template.price && (
                <div className="text-xl text-gray-400 line-through">
                  {template.originalPrice}zł
                </div>
              )}
              {template.originalPrice > template.price && (
                <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
                  -
                  {Math.round(
                    ((template.originalPrice - template.price) /
                      template.originalPrice) *
                      100,
                  )}
                  %
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-xl border border-gray-200/50 bg-white/60 p-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {template.stats.downloads}
                </div>
                <div className="text-sm text-gray-600">Pobrań</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {template.stats.satisfaction}
                </div>
                <div className="text-sm text-gray-600">Zadowolenia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">6m</div>
                <div className="text-sm text-gray-600">Wsparcia</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <MainBtn className="group flex w-full items-center justify-center gap-2 py-5">
                Kup teraz
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </MainBtn>

              <SecondBtn className="group flex w-full items-center justify-center gap-2 py-5">
                <Eye className="h-5 w-5" />
                Sprawdz szybkość
              </SecondBtn>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-green-600" />
              Bezpieczna płatność • 30-dniowa gwarancja zwrotu
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200/50 bg-white shadow-sm">
          <div className="flex border-b border-gray-200">
            {[
              { id: "overview", label: "Przegląd", icon: Eye },
              { id: "features", label: "Funkcje", icon: Zap },
              { id: "reviews", label: "Opinie", icon: Users },
              { id: "support", label: "Wsparcie", icon: Clock },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedTab(id)}
                className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 font-medium transition-all ${
                  selectedTab === id
                    ? "border-b-2 border-blue-600 bg-blue-50/50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {selectedTab === "overview" && (
              <div className="prose prose-lg max-w-none">
                <div className="markdown-content space-y-6">
                  <h2 className="border-l-4 border-blue-500 pl-4 text-3xl font-bold text-gray-900">
                    Profesjonalny Szablon Business Landing
                  </h2>

                  <p className="text-lg leading-relaxed text-gray-600">
                    Ten premium szablon został zaprojektowany z myślą o
                    nowoczesnych firmach, które chcą wyróżnić się w sieci.
                    Zawiera wszystkie niezbędne sekcje i komponenty potrzebne do
                    stworzenia skutecznej strony landing page.
                  </p>

                  <div className="my-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        Główne funkcje
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          Responsywny design
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          Optymalizacja SEO
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          Szybkie ładowanie
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-emerald-200/50 bg-gradient-to-r from-emerald-50 to-green-50 p-6">
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        Zawartość pakietu
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          Pliki HTML/CSS/JS
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          Dokumentacja
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />6 miesięcy
                          wsparcia
                        </li>
                      </ul>
                    </div>
                  </div>

                  <blockquote className="rounded-r-xl border-l-4 border-blue-500 bg-blue-50/50 p-6 text-lg text-gray-700 italic">
                    Ten szablon pomógł nam zwiększyc konwersję o 40% - CEO
                    TechStart
                  </blockquote>
                  {content && <MarkdownContent content={content} />}
                </div>
              </div>
            )}

            {selectedTab === "features" && (
              <div className="grid gap-6 md:grid-cols-2">
                {template.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === "reviews" && (
              <div className="py-12 text-center">
                <Users className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Opinie wkrótce
                </h3>
                <p className="text-gray-600">
                  Sekcja opinii będzie dostępna po pierwszych zakupach.
                </p>
              </div>
            )}

            {selectedTab === "support" && (
              <div className="rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
                <div className="text-center">
                  <Clock className="mx-auto mb-4 h-16 w-16 text-blue-500" />
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    Profesjonalne wsparcie
                  </h3>
                  <p className="mb-6 text-lg text-gray-600">
                    Otrzymujesz 6 miesięcy bezpłatnego wsparcia technicznego od
                    naszego zespołu ekspertów.
                  </p>
                  <div className="grid gap-4 text-center md:grid-cols-3">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        24h
                      </div>
                      <div className="text-sm text-gray-600">
                        Czas odpowiedzi
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        Email
                      </div>
                      <div className="text-sm text-gray-600">
                        Dedykowane wsparcie
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">6M</div>
                      <div className="text-sm text-gray-600">
                        Bezpłatne wsparcie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;
