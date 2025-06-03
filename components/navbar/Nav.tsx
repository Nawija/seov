"use client";

import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";
import { Logo } from "./Logo";
import { MenuBurger } from "./MenuBurger";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const menu = document.querySelector(".mobile-menu");
      const burger = document.querySelector(".menu-burger-button");

      if (
        showMenu &&
        menu &&
        burger &&
        !menu.contains(target) &&
        !burger.contains(target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  return (
    <>
      {showMenu && (
        <div
          className="anim-opacity fixed inset-0 z-[40] backdrop-blur-md lg:hidden"
          onClick={() => setShowMenu(false)}
          aria-hidden="true"
        />
      )}
      <header
        className={`top-0 z-50 w-full p-2 backdrop-blur-md transition-all duration-300`}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-4">
          <Link href="/" aria-label="strona-główna">
            <Logo h={33} w={33} />
          </Link>

          <MenuBurger
            handleShowMenu={() => setShowMenu(!showMenu)}
            showMenu={showMenu}
          />

          <div
            className={`mobile-menu bg-background fixed top-0 left-0 z-[50] h-screen w-[280px] transform text-gray-600 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mt-auto mb-10 flex items-center justify-end gap-5 p-6">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-3xl text-gray-500 transition-all hover:text-brand-main"
              >
                <TiSocialFacebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-gray-500 transition-all hover:text-brand-main"
              >
                <FiInstagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="flex h-full flex-col px-6">
              <nav aria-label="Menu mobilne">
                <ul className="flex flex-col space-y-6">
                  {NAVLINKS.map((link, index) => (
                    <li
                      key={link.label}
                      className={`transition-all duration-300 ${
                        showMenu ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 65}ms`,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setShowMenu(false)}
                        className={`block py-1 text-lg font-light uppercase transition-all ${
                          pathname === link.href
                            ? "text-brand-main font-semibold"
                            : ""
                        }`}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <nav className="hidden lg:block">
            <ul className="bg-background absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center space-x-1 rounded-xl border px-4 py-1 xl:space-x-4">
              {NAVLINKS.map((link) => (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    className={`hover:text-brand-main-light block w-max px-2 py-2 font-semibold uppercase transition-all lg:text-xs ${
                      pathname === link.href ? "text-brand-main" : ""
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-2xl transition-all"
            >
              <TiSocialFacebook />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-xl transition-all"
            >
              <FiInstagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
