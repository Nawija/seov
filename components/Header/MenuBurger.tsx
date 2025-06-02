"use client";

import { MenuBurgerProps } from "@/types/navbar";

export default function MenuBurger({
  handleShowMenu,
  showMenu,
}: MenuBurgerProps) {
  const burgerClass = "h-[2px] w-5 duration-300 rounded";

  return (
    <button
      onClick={handleShowMenu}
      aria-label={showMenu ? "Zamknij menu" : "Otwórz menu"}
      aria-expanded={showMenu}
      className="z-[999] flex ml-auto flex-col items-center justify-center space-y-1.5 p-1 lg:hidden"
    >
      <div
        className={`${burgerClass} transform transition-all ${
          showMenu
            ? "bg-black translate-y-1.5 rotate-[405deg]"
            : "bg-blue-500"
        }`}
      />
      <div
        className={`${burgerClass} transition-all ${
          showMenu ? "bg-black opacity-0" : "bg-blue-500"
        }`}
      />
      <div
        className={`${burgerClass} transform transition-all ${
          showMenu
            ? "bg-black -translate-y-2 -rotate-45"
            : "bg-blue-500"
        }`}
      />
    </button>
  );
}