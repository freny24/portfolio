"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/** Consistent section header with an eyebrow label and gradient title. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mb-14 max-w-2xl"
    >
      <span className="chip mb-4 font-mono uppercase tracking-widest">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-bold tracking-tight text-gradient md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
