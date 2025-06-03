"use client";

import { MainBtn } from "@/components/buttons/MainBtn";
import { motion } from "framer-motion";
import { CloudOff } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-[70vh] flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <CloudOff className="text-brand-main h-16 w-16" />
      </motion.div>

      <motion.h1
        className="mb-4 text-4xl font-bold sm:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Error 404 🤔
      </motion.h1>

      <motion.p
        className="text-muted-foreground mb-8 max-w-md text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Wygląda na to, że taka strona nie istnieje... Może została przeniesiona
        albo nigdy nie istniała.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link href="/">
          <MainBtn>Powrót na stronę główną</MainBtn>
        </Link>
      </motion.div>
    </motion.div>
  );
}
