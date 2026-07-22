"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  Briefcase,
  Rocket,
  Star,
} from "lucide-react";
import { timeline, certifications, type TimelineItem } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

const KIND = {
  education: { icon: GraduationCap, color: "#38e1ff" },
  research: { icon: FlaskConical, color: "#8b5cf6" },
  work: { icon: Briefcase, color: "#ffcf00" },
  project: { icon: Rocket, color: "#00af4d" },
  future: { icon: Star, color: "#e3350d" },
} as const;

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="timeline" className="section">
      <SectionHeading
        eyebrow="Trajectory"
        title="Flight path"
        description="Education, research, industry, and what comes next — a launch sequence, not a résumé dump."
      />

      {/* Left-rail timeline: reliable and clean on every device. */}
      <div ref={ref} className="relative pl-10 sm:pl-14">
        {/* Base rail */}
        <div className="absolute left-4 top-1 h-full w-px bg-[var(--border)] sm:left-6" />
        {/* Progress rail */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-4 top-1 h-full w-px origin-top bg-[linear-gradient(180deg,#6d5ef0,#38e1ff)] sm:left-6"
        />

        <div className="space-y-8">
          {timeline.map((item) => (
            <Node key={item.title} item={item} />
          ))}
        </div>
      </div>

      {/* Certifications */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-muted)]">
          Certifications
        </span>
        {certifications.map((c) => (
          <span key={c} className="chip">
            {c}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function Node({ item }: { item: TimelineItem }) {
  const { icon: Icon, color } = KIND[item.kind];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative"
    >
      {/* Dot on the rail */}
      <span
        className="absolute top-2 grid h-6 w-6 place-items-center rounded-full ring-4 ring-[var(--bg)]"
        style={{ backgroundColor: color, left: "-2.05rem" }}
      >
        <Icon className="h-3 w-3 text-black/80" />
      </span>

      <div className="glass rounded-2xl p-5">
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-widest"
          style={{ color }}
        >
          {item.year}
        </span>
        <h3 className="mt-1 font-display text-base font-semibold">
          {item.title}
        </h3>
        <p className="text-sm text-[var(--fg-muted)]">{item.org}</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
          {item.detail}
        </p>
      </div>
    </motion.div>
  );
}
