"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function GithubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/navarmp/unfiltered")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

  if (stars === null) return null;

  return (
    <motion.a
      href="https://github.com/navarmp/unfiltered"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors shadow-lg"
    >
      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      <span>{stars} Stars on GitHub</span>
    </motion.a>
  );
}
