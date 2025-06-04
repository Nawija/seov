"use client";

import { MainBtn } from "@/components/buttons/MainBtn";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="anim-opacity relative container mx-auto overflow-hidden px-6 py-10 lg:py-20">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8">
            <span className="bg-background mb-6 inline-block rounded-full border px-6 py-2 text-sm font-semibold text-brand text-blue-500 shadow-xl">
              ✨ Najnowszy Next.js 15.3.3
            </span>
          </div>

          <h1 className="mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-7xl">
            Profesjonalny NextJS WebDeveloper
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed md:text-base text-foreground">
            Tworzę <strong>nowoczesne, błyskawicznie szybkie</strong> i w pełni
            responsywne strony internetowe, które{" "}
            <strong>dominują w Google</strong> i zachwycają użytkowników
          </p>
          <MainBtn>Portfolio</MainBtn>

        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

    </>
  );
}
