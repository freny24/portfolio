"use client";

import { motion } from "framer-motion";
import { skillCategories, experience } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Mission Control"
        title="Systems & instruments"
        description="The stack I fly with — organized by domain, not by a meaningless percentage bar."
      />

      {/* Experience strip */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-10 grid gap-4 md:grid-cols-2"
      >
        {experience.map((e) => (
          <motion.div
            key={e.org}
            variants={fadeUp}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-base font-semibold">{e.role}</h3>
              <span className="shrink-0 font-mono text-[11px] text-space-cyan">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">
              {e.org} · {e.location}
            </p>
            <ul className="mt-3 space-y-2">
              {e.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--fg-muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-space-purple" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-5"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ backgroundColor: cat.accent, opacity: 0.25 }}
              />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-lg"
                    style={{ backgroundColor: `${cat.accent}22` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: cat.accent }} />
                  </div>
                  <h3 className="font-display text-sm font-semibold">
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[var(--border)] bg-[var(--glass)] px-2 py-1 text-[11px] text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
