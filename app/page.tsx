"use client";

import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="anim-opacity relative container mx-auto overflow-hidden px-6 py-20">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8">
            <span className="bg mb-6 inline-block rounded-full border border-blue-200/50 px-6 py-2 text-sm font-semibold text-blue-600 shadow-xl">
              ✨ Najnowszy Next.js 15.3.3
            </span>
          </div>

          <h1 className="mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-7xl">
            Profesjonalny{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Next.js
              </span>
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-xl" />
            </span>
            Developer
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed md:text-base">
            Tworzę <strong>nowoczesne, błyskawicznie szybkie</strong> i w pełni
            responsywne strony internetowe, które{" "}
            <strong>dominują w Google</strong> i zachwycają użytkowników
          </p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

     
    </>
  );
}
