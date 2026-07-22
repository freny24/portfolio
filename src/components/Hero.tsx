"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
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
import { SceneErrorBoundary } from "./three/SceneErrorBoundary";
import { stagger, fadeUp } from "@/lib/motion";

const SpaceScene = dynamic(() => import("./three/SpaceScene"), {
  ssr: false,
  loading: () => null,
});

type StarSpec = { size: number; top: number; left: number; dur: number; delay: number };

function StarFallback() {
  const [stars, setStars] = useState<StarSpec[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 70 }, () => ({
        size: Math.random() * 2 + 0.5,
        top: Math.random() * 100,
        left: Math.random() * 100,
        dur: 2 + Math.random() * 4,
        delay: Math.random() * 4,
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
            // @ts-expect-error custom property
            "--dur": `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />

      <div className="absolute inset-0 z-0">
        <StarFallback />
        {mounted && (
          <SceneErrorBoundary fallback={null}>
            <SpaceScene />
          </SceneErrorBoundary>
        )}
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
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-[var(--fg-muted)]"
      >
        <span className="font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </section>
  );
}
