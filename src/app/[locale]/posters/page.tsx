"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Image as ImageIcon, ArrowRight } from "lucide-react";

export default function PostersPage() {
  const posters = [
    {
      title: "Eid Mubarak 2026",
      slug: "eid-mubarak-2026",
      description: "A spiritual celebration of faith and unity.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "National Day",
      slug: "national-day",
      description: "Honoring our roots and looking to the future.",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Art & Tech",
      slug: "art-tech",
      description: "Where creativity meets binary precision.",
      color: "from-blue-500/20 to-purple-500/20",
    },
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-6xl font-display font-black tracking-tight">Posters</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Immersive, standalone digital experiences created for special moments and expressions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posters.map((poster, i) => (
          <motion.div
            key={poster.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <Link href={`/posters/${poster.slug}`}>
              <div className={`aspect-[4/5] rounded-[2rem] bg-gradient-to-br ${poster.color} border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 text-center space-y-4 group-hover:scale-[1.02] transition-transform duration-500`}>
                <div className="p-4 bg-background/50 backdrop-blur-md rounded-2xl group-hover:rotate-12 transition-transform">
                  <ImageIcon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold">{poster.title}</h2>
                <p className="text-sm text-muted-foreground">{poster.description}</p>
                
                <div className="absolute bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
