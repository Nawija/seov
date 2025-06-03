"use client";

import { MenuBurgerProps } from "@/types/navbar";

export function MenuBurger({ handleShowMenu, showMenu }: MenuBurgerProps) {
  const burgerClass = "h-[3px] duration-300 rounded-lg bg-brand-main-light";

  return (
    <button
      onClick={handleShowMenu}
      aria-label={showMenu ? "Zamknij menu" : "Otwórz menu"}
      aria-expanded={showMenu}
      className="bg-background z-[999] ml-auto flex flex-col items-end border justify-center space-y-1 rounded-lg p-2 lg:hidden"
    >
      <div
        className={`${burgerClass} w-5 transform transition-all ${
          showMenu ? "translate-y-1.5 rotate-[405deg]" : ""
        }`}
      />
      <div
        className={`${burgerClass} w-5 transition-all ${
          showMenu ? "opacity-0" : ""
        }`}
      />
      <div
        className={`${burgerClass} transform transition-all ${
          showMenu ? "w-5 -translate-y-2 -rotate-45" : "w-3"
        }`}
      />
    </button>
  );
}
