"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";
import { site } from "@/lib/data";
import { MagneticButton } from "./ui/MagneticButton";
import { stagger, fadeUp } from "@/lib/motion";

type StarSpec = {
  size: number;
  top: number;
  left: number;
  dur: number;
  delay: number;
  glow: boolean;
};

/**
 * Animated CSS star field hero background. Rendered only after mount so the
 * random positions never cause a hydration mismatch. Fully self-contained —
 * no WebGL / three.js dependency, so it can never crash the page.
 */
function StarField() {
  const [stars, setStars] = useState<StarSpec[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 90 }, (_, i) => ({
        size: Math.random() * 2.4 + 0.5,
        top: Math.random() * 100,
        left: Math.random() * 100,
        dur: 2 + Math.random() * 4,
        delay: Math.random() * 4,
        glow: i % 9 === 0,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            boxShadow: s.glow
              ? "0 0 8px 2px rgba(56,225,255,0.8)"
              : undefined,
            // @ts-expect-error custom property
            "--dur": `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Soft floating nebula orbs for depth */}
      <div className="absolute left-[12%] top-[24%] h-72 w-72 rounded-full bg-space-purple/20 blur-3xl animate-float-slow" />
      <div className="absolute right-[10%] top-[40%] h-80 w-80 rounded-full bg-space-cyan/15 blur-3xl animate-float" />
      <div className="absolute left-[45%] bottom-[8%] h-64 w-64 rounded-full bg-space-nebula/20 blur-3xl animate-float-slow" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />

      <div className="absolute inset-0 z-0">
        <StarField />
      </div>

      <div className="section relative z-10 grid items-center gap-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="chip mb-6 font-mono uppercase tracking-[0.25em]"
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-space-cyan" />
            Available for 2026 roles · {site.location}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-display text-xl font-medium text-[var(--fg)] md:text-2xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg"
          >
            {site.headline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href={site.resumeFile}
              variant="primary"
              external
              ariaLabel="Open résumé PDF"
            >
              <FileText className="h-4 w-4" /> Résumé
            </MagneticButton>
            <MagneticButton href="#projects" ariaLabel="View projects">
              <FolderGit2 className="h-4 w-4" /> Projects
            </MagneticButton>
            <MagneticButton href={site.github} external ariaLabel="GitHub profile">
              <Github className="h-4 w-4" /> GitHub
            </MagneticButton>
            <MagneticButton href={site.linkedin} external ariaLabel="LinkedIn profile">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </MagneticButton>
            <MagneticButton href={`mailto:${site.email}`} ariaLabel="Email Freny">
              <Mail className="h-4 w-4" /> Contact
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-[var(--fg-muted)]"
      >
        <span className="font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </section>
  );
}
