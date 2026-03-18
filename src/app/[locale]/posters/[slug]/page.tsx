"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function PosterPage({ params: { slug } }: { params: { slug: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // In a real app, you'd fetch data from MongoDB here.
  // For now, let's mock a "Eid Mubarak" poster.
  const isMockPoster = slug === "eid-mubarak-2026";

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // 3D Tilt Effect on the whole container
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 40;
        const yPos = (clientY / innerHeight - 0.5) * 40;

        gsap.to(containerRef.current, {
          rotateY: xPos,
          rotateX: -yPos,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      
      // Floating particles/elements
      gsap.to(".floating-shape", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, [slug]);

  if (!isMockPoster) return notFound();

  return (
    <div className="perspective-1000 min-h-[80vh] flex items-center justify-center p-4">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="relative w-full max-w-4xl aspect-[4/5] md:aspect-video rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center p-12"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="floating-shape absolute top-10 left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="floating-shape absolute bottom-20 right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-sm"
          >
            Special Celebration
          </motion.span>
          
          <h1
            ref={textRef}
            className="text-6xl md:text-9xl font-black italic tracking-tighter text-white drop-shadow-2xl"
          >
            EID <br /> MUBARAK
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-lg mx-auto font-light italic">
            "Wishing you a day filled with laughter, love, and the blessings of Allah."
          </p>
        </div>

        {/* Dynamic Glassmorphic Overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none border border-white/5 m-4 rounded-[1.5rem]" />
      </motion.div>
    </div>
  );
}
