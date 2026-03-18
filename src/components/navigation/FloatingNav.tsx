"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Home, Image as ImageIcon, FileText, User, Menu } from "lucide-react";

export function FloatingNav() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const t = useTranslations("Navigation");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: t("home"), href: "/", icon: <Home className="w-4 h-4" /> },
    { name: t("posters"), href: "/posters", icon: <ImageIcon className="w-4 h-4" /> },
    { name: t("essays"), href: "/essays", icon: <FileText className="w-4 h-4" /> },
    { name: t("about"), href: "/about", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-background/30 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-6"
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href as any}
          className="text-foreground/70 hover:text-primary transition-colors flex flex-col items-center gap-1"
        >
          {item.icon}
          <span className="text-[10px] font-medium uppercase tracking-widest">{item.name}</span>
        </Link>
      ))}
    </motion.nav>
  );
}
