"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { MagneticButton } from "./ui/MagneticButton";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Planet horizon glow — "landing on another planet" */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] overflow-hidden">
        <div className="absolute -bottom-[520px] left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(109,94,240,0.55),rgba(56,225,255,0.15)_45%,transparent_70%)]" />
        <div className="absolute -bottom-[540px] left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full border-t border-space-cyan/30" />
      </div>

      <div className="section relative z-10 text-center">
        <SectionHeading
          eyebrow="Ground Control"
          title="Let's build something worth remembering"
          description="Open to Data Scientist, ML Engineer, AI Engineer, Geospatial, and Healthcare AI roles. The fastest way to reach me is email."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto flex max-w-xl flex-col items-center"
        >
          <a
            href={`mailto:${site.email}`}
            className="font-display text-2xl font-bold aurora-text sm:text-4xl"
          >
            {site.email}
          </a>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--fg-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {site.location}
            </span>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href={`mailto:${site.email}`}
              variant="primary"
              ariaLabel="Email Freny"
            >
              <Mail className="h-4 w-4" /> Email me
            </MagneticButton>
            <MagneticButton href={site.github} external ariaLabel="GitHub">
              <Github className="h-4 w-4" /> GitHub
            </MagneticButton>
            <MagneticButton href={site.linkedin} external ariaLabel="LinkedIn">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </MagneticButton>
            <MagneticButton
              href={site.resumeFile}
              external
              ariaLabel="Résumé PDF"
            >
              <FileText className="h-4 w-4" /> Résumé
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
