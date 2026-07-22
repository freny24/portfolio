"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { about, education } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="Flight Log"
        title="Building a career one block at a time"
        description="A data scientist who cares about the middle of the pipeline — where a model earns trust."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Narrative */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-3"
        >
          <GlassCard glow={false} className="h-full">
            {about.intro.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="mb-4 text-base leading-relaxed text-[var(--fg-muted)] last:mb-0 md:text-lg"
              >
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {about.interests.map((it) => (
                <span key={it} className="chip">
                  <Sparkles className="mr-1.5 h-3 w-3 text-space-cyan" />
                  {it}
                </span>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 lg:col-span-2"
        >
          {about.stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <GlassCard className="flex h-full flex-col justify-center">
                <p className="font-display text-3xl font-bold aurora-text">
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="mt-2 text-xs leading-snug text-[var(--fg-muted)]">
                  {s.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6 grid gap-4 md:grid-cols-2"
      >
        {education.map((e) => (
          <motion.div key={e.school} variants={fadeUp}>
            <GlassCard className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(120deg,#6d5ef0,#38e1ff)]">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold">{e.school}</h3>
                <p className="text-sm text-[var(--fg-muted)]">{e.degree}</p>
                <p className="mt-1 font-mono text-xs text-[var(--fg-muted)]">
                  {e.period} · GPA {e.gpa}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
