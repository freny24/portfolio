"use client";

import { Rocket } from "lucide-react";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[var(--fg-muted)] sm:flex-row">
        <p className="flex items-center gap-2">
          <Rocket className="h-3.5 w-3.5 text-space-cyan" />
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Three.js
          & Framer Motion.
        </p>
        <p className="font-mono">Designed & shipped from {site.location}</p>
      </div>
    </footer>
  );
}
