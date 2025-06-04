//app/szablony/components/TemplateGrid.tsx
"use client";

import type { Template } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TemplateGridProps {
  templates: Template[];
}

export function TemplateGrid({ templates }: TemplateGridProps) {
  return (
    <div className="relative mb-12 flex-1">
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <AnimatePresence>
          {templates.map((template: Template) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex h-full flex-col overflow-hidden rounded-xl border bg-white/80"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  height={300}
                  width={400}
                  src={template.image}
                  alt={template.name}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  <span className="text-sm font-medium">{template.rating}</span>
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
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

                <div className="mt-auto flex justify-between gap-2">
                  <Link
                    href={template.url}
                    target="_blank"
                    className="group flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    <Eye className="h-4 w-4" />
                    Demo
                  </Link>
                  <button className="bg-brand-main hover:bg-brand-main/90 group flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition-colors">
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
  );
}
