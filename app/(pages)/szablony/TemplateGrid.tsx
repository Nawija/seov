// app/szablony/TemplateGrid.tsx
"use client";

import { MainBtn } from "@/components/buttons/MainBtn";
import { SecondBtn } from "@/components/buttons/SecondBtn";
import ShimmerLoader from "@/components/ShimmerLoader";
import type { Template } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TemplateGridProps {
  templates: Template[];
}

export function TemplateGrid({ templates }: TemplateGridProps) {
  const [loadingImages, setLoadingImages] = useState(true);
  return (
    <div className="relative mb-12 flex-1">
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence>
          {templates.map((template: Template) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex h-full flex-col overflow-hidden rounded-xl border bg-white/80"
            >
              <Link
                href={`/szablony/${template.slug}`}
                className="relative block"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {loadingImages && <ShimmerLoader />}
                  <Image
                    height={300}
                    width={400}
                    onLoadingComplete={() => setLoadingImages(false)}
                    src={template.image}
                    alt={template.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  <span className="text-sm font-medium">{template.rating}</span>
                </div>
              </Link>

              <div className="flex h-full flex-col p-6">
                {/* Tytuł jako link */}
                <Link href={`/szablony/${template.slug || template.id}`}>
                  <h3 className="text-foreground mb-3 cursor-pointer text-xl font-semibold transition-colors hover:text-blue-600">
                    {template.name}
                  </h3>
                </Link>

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

                <div className="mt-auto mb-4 flex items-center justify-between">
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

                <div className="mt-5 flex w-full items-center justify-center gap-4">
                  <Link
                    href={template.url}
                    target="_blank"
                    className="group w-full"
                  >
                    <SecondBtn className="flex w-full items-center justify-center gap-2 h-12">
                      <Eye className="h-4 w-4" />
                      Demo
                    </SecondBtn>
                  </Link>

                  <Link
                    href={`/szablony/${template.slug || template.id}`}
                    className="group w-full"
                  >
                    <MainBtn className="flex w-full items-center justify-center gap-2 h-12 text-nowrap">
                      Zobacz więcej
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </MainBtn>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
