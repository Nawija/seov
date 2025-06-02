"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-6 z-[9999] rounded-full border border-zinc-800 bg-black p-2 text-white transition-all duration-500 ease-in-out md:bottom-12 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } `}
      aria-label="Powrót na górę"
    >
      <IoIosArrowUp className="h-6 w-6" />
    </button>
  );
}
