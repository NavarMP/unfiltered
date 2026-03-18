"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Clock, Tag, ArrowRight } from "lucide-react";

export default function EssaysPage() {
  const essays = [
    {
      title: "The Intersection of Faith and Modern Technology",
      slug: "faith-tech",
      excerpt: "Exploring how digital tools can enhance our spiritual journey without compromising traditional values.",
      category: "Religion",
      date: "Oct 24, 2025",
    },
    {
      title: "Preserving National Identity in a Globalized World",
      slug: "national-identity",
      excerpt: "A deep dive into the importance of cultural heritage and the challenges of maintaining a unique national voice.",
      category: "Country",
      date: "Nov 12, 2025",
    },
    {
      title: "The Art of Research: A Lifelong Pursuit",
      slug: "art-research",
      excerpt: "Reflecting on the methods and joys of continuous learning and uncovering hidden truths.",
      category: "Life",
      date: "Dec 05, 2025",
    },
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-6xl font-display font-black tracking-tight">Essays</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Deep reflections on life, religion, country, and the ever-evolving landscape of politics.
        </p>
      </div>

      <div className="space-y-12">
        {essays.map((essay, i) => (
          <motion.article
            key={essay.slug}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <Link href={`/essays/${essay.slug}`}>
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 bg-secondary/30 backdrop-blur-md rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary">
                    <span className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {essay.category}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {essay.date}
                    </span>
                  </div>
                  <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">
                    {essay.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl line-clamp-2">
                    {essay.excerpt}
                  </p>
                </div>

                <div className="p-4 bg-primary text-primary-foreground rounded-full group-hover:scale-110 transition-transform hidden md:block">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
