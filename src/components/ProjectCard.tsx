"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  Radio,
  FlaskConical,
  Rocket,
  Satellite,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import type { Project } from "@/lib/data";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { cn } from "@/lib/utils";

const MISSION_ICON = {
  "Mission Control": Radio,
  "Research Lab": FlaskConical,
  "Launch Pad": Rocket,
  "Satellite Dashboard": Satellite,
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const Icon = MISSION_ICON[project.missionType];

  return (
    <motion.article
      layout
      className={cn(
        "glass group relative overflow-hidden rounded-3xl p-6 shadow-glass transition-shadow duration-500 hover:shadow-glow md:p-8",
        !project.verified && "opacity-90"
      )}
    >
      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-space-purple/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-40"
      />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(140deg,#6d5ef0,#38e1ff)]">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-space-cyan">
                {project.missionType} · {project.year}
              </p>
              <h3 className="font-display text-xl font-bold md:text-2xl">
                {project.title}
              </h3>
            </div>
          </div>

          {!project.verified && (
            <span className="chip shrink-0 border-lego-yellow/40 text-lego-yellow">
              Coming online
            </span>
          )}
        </div>

        <p className="mt-4 text-sm text-[var(--fg-muted)]">{project.tagline}</p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--glass)] px-3 py-3 text-center"
            >
              <p className="font-display text-lg font-bold aurora-text">
                <AnimatedCounter value={m.value} />
              </p>
              <p className="mt-1 text-[10px] leading-tight text-[var(--fg-muted)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition hover:border-space-cyan/50"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#6d5ef0,#38e1ff)] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
            >
              <ExternalLink className="h-3.5 w-3.5" />{" "}
              {project.links.demoLabel ?? "Live Demo"}
            </a>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            Mission brief
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                open && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Expandable brief */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-5 border-t border-[var(--border)] pt-6">
                <Detail icon={Target} label="Problem" text={project.problem} />

                <div>
                  <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-space-cyan">
                    <Rocket className="h-3.5 w-3.5" /> Approach
                  </p>
                  <ul className="space-y-2">
                    {project.approach.map((a, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--fg-muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-space-purple" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.challenges && (
                  <Detail
                    icon={FlaskConical}
                    label="Key challenge"
                    text={project.challenges}
                  />
                )}
                {project.impact && (
                  <Detail
                    icon={TrendingUp}
                    label="Impact"
                    text={project.impact}
                  />
                )}
                {project.lessons && (
                  <Detail
                    icon={Lightbulb}
                    label="Lessons learned"
                    text={project.lessons}
                  />
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function Detail({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Target;
  label: string;
  text: string;
}) {
  return (
    <div>
      <p className="mb-1.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-space-cyan">
        <Icon className="h-3.5 w-3.5" /> {label}
      </p>
      <p className="text-sm leading-relaxed text-[var(--fg-muted)]">{text}</p>
    </div>
  );
}
