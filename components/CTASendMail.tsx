"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MainBtn } from "./buttons/MainBtn";
import ContactForm from "./ContactForm";

export default function CTASendMail({ title }: { title: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <MainBtn className="uppercase" onClick={() => setIsModalOpen(true)}>
        {title}
      </MainBtn>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed -top-6 left-0 z-[9999] flex h-[110%] w-full items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative -mt-20 w-[90%] max-w-lg bg-white p-6 shadow-lg"
            >
              <button
                className="absolute top-2 right-2"
                onClick={() => setIsModalOpen(false)}
              >
                <IoMdClose className="text-2xl text-black" />
              </button>
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
