"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Share2, Info, Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";

export function CustomContextMenu() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleClick = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("click", handleClick);
    };
  }, [handleContextMenu, handleClick]);

  const menuItems = [
    {
      label: "Copy Link",
      icon: <Copy className="w-4 h-4" />,
      onClick: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      label: "Switch Theme",
      icon: <Palette className="w-4 h-4" />,
      onClick: () => {
        const themes = ["light", "dark", "expressive"];
        const next = themes[(themes.indexOf(theme || "light") + 1) % themes.length];
        setTheme(next);
      },
    },
    {
      label: "Page Info",
      icon: <Info className="w-4 h-4" />,
      onClick: () => console.log("Info clicked"),
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          style={{ top: position.y, left: position.x }}
          className="fixed z-[100] min-w-[180px] bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2"
        >
          {menuItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={item.onClick}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-xl transition-colors text-foreground/80 hover:text-primary"
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
