"use client";

import { MenuBurgerProps } from "@/types/navbar";

export function MenuBurger({ handleShowMenu, showMenu }: MenuBurgerProps) {
  const burgerClass = "h-[2px] w-4 duration-300 rounded-lg bg-blue-300";

  return (
    <button
      onClick={handleShowMenu}
      aria-label={showMenu ? "Zamknij menu" : "Otwórz menu"}
      aria-expanded={showMenu}
      className="z-[999] ml-auto flex flex-col items-center bg p-2 rounded-lg justify-center space-y-1 lg:hidden"
    >
      <div
        className={`${burgerClass} transform transition-all ${
          showMenu ? "translate-y-1.5 rotate-[405deg]" : ""
        }`}
      />
      <div
        className={`${burgerClass} transition-all ${
          showMenu ? "opacity-0" : ""
        }`}
      />
      <div
        className={`${burgerClass} transform transition-all ${
          showMenu ? "-translate-y-2.5 -rotate-45" : ""
        }`}
      />
    </button>
  );
}
