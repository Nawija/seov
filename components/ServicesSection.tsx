import { SERVICESLINKS } from "@/constants/Links";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => setIsDragging(false);

  return (
    <section className="bg-white/70 mx-auto py-12">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Usługi freelancer:
      </h2>

      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className="hide-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 select-none active:cursor-grabbing"
        style={{
          scrollPaddingLeft: "50%",
        }}
      >
        <div className="w-0 shrink-0 py-4 lg:w-[20%]" aria-hidden />
        {SERVICESLINKS.map(({ href, label, desc, icon: Icon }) => (
          <Link
            href={href}
            key={label}
            onClick={(e) => {
              if (isDragging) e.preventDefault();
            }}
            draggable="false"
            className="bg relative flex w-64 shrink-0 snap-none flex-col items-center justify-center space-y-2 overflow-hidden rounded-2xl border border-blue-100 shadow-lg transition hover:shadow-xl"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
              {Icon && <Icon className="h-8 w-8 text-blue-700" />}
            </div>
            <div className="flex flex-col items-center justify-center pb-2 text-center">
              <h2 className="text-lg font-semibold">{label}</h2>
              <h3 className="px-4 text-sm text-gray-600">{desc}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
