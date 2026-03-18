"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.8, ease: "anticipate" }}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-primary-foreground"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <span className="font-black text-2xl tracking-tighter uppercase group-hover:text-primary transition-colors">
        Unfiltered
      </span>
    </Link>
  );
}
