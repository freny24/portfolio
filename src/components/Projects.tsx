"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function Projects() {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Mission Log"
        title="Selected missions"
        description="Every project framed as a mission — the problem, the build, the measurable outcome. Open a brief for the full story."
      />

      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold transition",
              filter === c
                ? "bg-[linear-gradient(120deg,#6d5ef0,#38e1ff)] text-white shadow-glow"
                : "glass text-[var(--fg-muted)] hover:text-[var(--fg)]"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
