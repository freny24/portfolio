"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Rocket } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
          scrolled ? "glass-strong shadow-glass" : "bg-transparent"
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-sm font-bold tracking-tight"
        >
          <Rocket className="h-5 w-5 text-space-cyan" />
          <span className="text-gradient">FR</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-[var(--fg-muted)] transition-colors hover:bg-[var(--glass)] hover:text-[var(--fg)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="glass grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-105"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-[linear-gradient(120deg,#6d5ef0,#38e1ff)] px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 md:inline-flex"
          >
            Contact
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass grid h-9 w-9 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass-strong absolute top-20 w-[92%] max-w-sm space-y-1 rounded-2xl p-3 md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-[var(--fg-muted)] hover:bg-[var(--glass)] hover:text-[var(--fg)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-[linear-gradient(120deg,#6d5ef0,#38e1ff)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Download Résumé
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
