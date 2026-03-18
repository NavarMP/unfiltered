"use client";

import { Logo } from "@/components/ui/Logo";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon, Palette, Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const cycleTheme = () => {
    const themes = ["light", "dark", "expressive"];
    const next = themes[(themes.indexOf(theme || "light") + 1) % themes.length];
    setTheme(next);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between pointer-events-none">
      <div className="pointer-events-auto">
        <Logo />
      </div>

      <div className="flex items-center gap-2 pointer-events-auto bg-background/50 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-lg">
        <button
          onClick={toggleLocale}
          className="p-2.5 hover:bg-primary/10 rounded-full transition-colors group relative"
        >
          <Languages className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={cycleTheme}
          className="p-2.5 hover:bg-primary/10 rounded-full transition-colors group relative"
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          ) : theme === "light" ? (
            <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          ) : (
            <Palette className="w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
          )}
        </button>
      </div>
    </header>
  );
}
