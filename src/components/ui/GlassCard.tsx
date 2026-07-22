"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Premium glass card with an optional glow-on-hover border sheen. */
export function GlassCard({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <motion.div
      whileHover={glow ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={cn(
        "glass group relative overflow-hidden rounded-2xl p-6 shadow-glass",
        className
      )}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(109,94,240,0.18), transparent 40%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
