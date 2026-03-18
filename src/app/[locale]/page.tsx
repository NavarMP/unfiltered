"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Star, PenTool, Image as ImageIcon } from "lucide-react";
import { GithubStars } from "@/components/ui/GithubStars";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <div className="flex justify-center mb-4">
           <GithubStars />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-4">
          {t("title").split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.6, type: "spring" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium leading-tight tracking-tight">
          {t("subtitle")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <Link href="/posters">
          <button className="group relative px-8 py-5 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-primary/40 flex items-center gap-3">
            <ImageIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore Posters
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        <Link href="/essays">
          <button className="group px-8 py-5 bg-secondary text-secondary-foreground border border-white/10 rounded-full font-black uppercase tracking-widest text-sm hover:bg-muted transition-all active:scale-95 flex items-center gap-3">
            <PenTool className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            Read Essays
          </button>
        </Link>
      </motion.div>

      {/* Decorative SVG Background */}
      <div className="absolute top-[30%] left-0 w-full h-full -z-10 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0 50 Q 25 10 50 50 T 100 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-primary"
            animate={{
              d: [
                "M0 50 Q 25 10 50 50 T 100 50",
                "M0 50 Q 25 90 50 50 T 100 50",
                "M0 50 Q 25 10 50 50 T 100 50",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
