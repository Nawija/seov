"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsMessenger } from "react-icons/bs";

export default function Messenger() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showAfterTimeout = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(showAfterTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="https://m.me/JarekOlszewskiFotografia"
      className={`fixed bottom-6 left-4 z-50 rounded-full border bg-white p-2 text-white shadow-xl transition-all duration-500 ease-in-out md:bottom-12 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } `}
      aria-label="Messenger"
    >
      <BsMessenger className="h-7 w-7 text-blue-500" />
      <div className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-red-600" />
      <div className="absolute top-0 right-0 h-3 w-3 animate-ping rounded-full bg-blue-300" />
    </Link>
  );
}
