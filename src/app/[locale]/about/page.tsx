"use client";

import { motion } from "framer-motion";
import { Mail, Github, Globe, ExternalLink, Heart, Laptop, BookOpen, PenTool, Hash, Church, Flag, Landmark } from "lucide-react";
import Image from "next/image";
import { GithubStars } from "@/components/ui/GithubStars";

export default function AboutPage() {
  const skills = [
    { icon: <Laptop className="w-5 h-5" />, label: "Web Developer" },
    { icon: <PenTool className="w-5 h-5" />, label: "Graphic Designer" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Research Enthusiast" },
    { icon: <Heart className="w-5 h-5" />, label: "Art Lover" },
    { icon: <Hash className="w-5 h-5" />, label: "Techy" },
  ];

  const interests = [
    { icon: <Church className="w-5 h-5" />, label: "Religious" },
    { icon: <Flag className="w-5 h-5" />, label: "Country" },
    { icon: <Landmark className="w-5 h-5" />, label: "Politics" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 p-2"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-muted">
             {/* Replace with your image */}
             <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-4xl">
               MN
             </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black tracking-tight"
          >
            Muhammed Navar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium"
          >
            Senior Full-Stack Developer & Creative Designer
          </motion.p>
          
          <div className="flex justify-center gap-4 pt-4">
            <GithubStars />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <h2 className="text-3xl font-display font-bold text-foreground">A Digital Craftsman.</h2>
          <p>
            I am Muhammed Navar, a passionate web developer and graphic designer with a deep curiosity for research and a profound love for art. 
          </p>
          <p>
            My work is where technical precision meets creative expression. I believe in building digital experiences that are not just functional, but soulful and immersive.
          </p>
          <p>
            Beyond the screen, I am a dedicated researcher and an art enthusiast, constantly exploring the intersections of technology, culture, and faith.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {skills.concat(interests).map((item, i) => (
            <div key={i} className="p-6 bg-secondary/50 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col items-center gap-3 hover:bg-primary/5 transition-colors">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-center">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact & Links */}
      <section className="py-20 bg-primary/5 rounded-[3rem] border border-primary/10 flex flex-col items-center text-center space-y-12">
        <h2 className="text-4xl font-display font-bold">Let's connect.</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:navarmp@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-full hover:border-primary transition-colors group">
            <Mail className="w-5 h-5 group-hover:text-primary" />
            <span className="font-bold">navarmp@gmail.com</span>
          </a>
          <a href="https://navarmp.digibayt.com" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-full hover:border-primary transition-colors group">
            <Globe className="w-5 h-5 group-hover:text-primary" />
            <span className="font-bold">Portfolio</span>
            <ExternalLink className="w-4 h-4 opacity-50" />
          </a>
          <a href="https://github.com/navarmp" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-full hover:border-primary transition-colors group">
            <Github className="w-5 h-5 group-hover:text-primary" />
            <span className="font-bold">GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
