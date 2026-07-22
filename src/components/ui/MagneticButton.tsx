"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

/**
 * A button/link that subtly leans toward the cursor (magnetic microinteraction).
 * Renders as an <a> so it works for external links and in-page anchors.
 */
export function MagneticButton({
  children,
  href,
  variant = "ghost",
  className,
  external,
  ariaLabel,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.25, y: y * 0.25 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300",
        variant === "primary"
          ? "text-white shadow-glow bg-[linear-gradient(120deg,#6d5ef0,#8b5cf6_45%,#38e1ff)] hover:brightness-110"
          : "glass text-[var(--fg)] hover:border-space-cyan/50",
        className
      )}
    >
      {children}
    </motion.a>
  );
}
