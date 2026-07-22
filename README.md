# Freny Reji — Portfolio

A premium, space-meets-LEGO portfolio for a Data Scientist / ML & AI Engineer.
Dark-by-default, glassmorphism, cinematic 3D hero, restrained spring-physics motion.

**Stack:** Next.js 15 (App Router) · TypeScript · TailwindCSS · Framer Motion ·
Three.js + React Three Fiber + drei · lucide-react. Vercel-ready, SEO-optimized,
code-split, accessible (reduced-motion aware).

---

## 1. Quick start (local)

> If a `node_modules/` folder shipped with this project, delete it first — it may
> be a partial copy: `rm -rf node_modules package-lock.json`

```bash
# Node 18.18+ required (Node 20 LTS recommended)
npm install
npm run dev          # http://localhost:3000
```

Build & preview a production bundle:

```bash
npm run build
npm start
```

---

## 2. Make it yours (all content lives in one file)

Everything the site shows comes from **`src/lib/data.ts`** — edit that file and the
whole site updates. Look for `// TODO` markers:

| What | Where in `src/lib/data.ts` |
|------|----------------------------|
| Name, role, headline, email, phone, location | `site` |
| **LinkedIn URL** (currently a placeholder) | `site.linkedin` |
| Final deployed domain (for SEO/OG) | `site.url` |
| GitHub profile | `site.github` |
| Project GitHub / demo links | each `projects[].links` |
| Projects, metrics, mission briefs | `projects` |
| Skills groups | `skillCategories` |
| Career timeline | `timeline` |
| About narrative + stats | `about` |

**Placeholder ("Coming online") projects:** two cards — *Floating Photovoltaics
Global Dashboard* and *AI Clinical Notes Summarizer* — have `verified: false`. They
render with a "Coming online" badge. Fill in their details and set `verified: true`,
or delete the entries.

**Résumé PDF:** replace `public/Freny_Reji_AI_Engineer_Resume.pdf` with your latest.
The path is set in `site.resumeFile`.

**Social/OG image:** replace `public/og.png` (1200×630) with a branded graphic.

---

## 3. Project structure

```
src/
  app/
    layout.tsx        # fonts, SEO metadata, JSON-LD, ThemeProvider
    page.tsx          # assembles all sections
    globals.css       # theme tokens, glass utilities, reduced-motion
    robots.ts         # /robots.txt
    sitemap.ts        # /sitemap.xml
  components/
    Navbar.tsx        # sticky glass nav + theme toggle + mobile menu
    Hero.tsx          # cinematic hero (lazy-loads the 3D scene)
    About.tsx         # narrative, animated stat counters, education
    Projects.tsx      # category filter + mission grid
    ProjectCard.tsx   # expandable "mission brief" card
    Skills.tsx        # Mission-Control skill dashboard + experience
    Timeline.tsx      # scroll-linked career rail
    Contact.tsx       # "landing on a planet" closing section
    Footer.tsx
    ScrollProgress.tsx
    three/            # React Three Fiber scene
      SpaceScene.tsx  # canvas, lighting, stars, parallax rig
      LegoAstronaut.tsx   # minifigure built from primitives
      DataNodes.tsx       # planet + orbiting ML-graph nodes
      FloatingBricks.tsx  # instanced drifting LEGO bricks
    ui/               # reusable primitives
      GlassCard.tsx
      SectionHeading.tsx
      MagneticButton.tsx
      AnimatedCounter.tsx
  context/ThemeProvider.tsx   # dark/light, persisted, respects OS
  hooks/useMousePosition.ts
  lib/
    data.ts           # ← SINGLE SOURCE OF TRUTH for content
    motion.ts         # shared Framer Motion presets
    utils.ts          # cn() class merger
```

---

## 4. Deploy to Vercel

### Option A — Git + Vercel dashboard (recommended)

1. **Push to GitHub.** From the project folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/freny24/portfolio.git
   git push -u origin main
   ```
   (Create the empty `portfolio` repo on GitHub first.)

2. **Import into Vercel.** Go to https://vercel.com/new → *Add New… → Project* →
   *Import* your GitHub repo. Vercel auto-detects Next.js — no config needed:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output: `.next` (default)
   - Install Command: `npm install` (default)

3. **Deploy.** Click **Deploy**. First build takes ~1–2 min. You'll get a URL like
   `https://portfolio-xxxx.vercel.app`.

4. **Set your real domain in code.** Update `site.url` in `src/lib/data.ts` to the
   final URL (used for SEO canonical + Open Graph), commit, and push — Vercel
   redeploys automatically on every push.

5. **(Optional) Custom domain.** Project → *Settings → Domains* → add e.g.
   `frenyreji.com`, then point your registrar's DNS to Vercel (they show the exact
   A / CNAME records).

### Option B — Vercel CLI (no GitHub)

```bash
npm i -g vercel
vercel            # first run: links/creates the project (accept defaults)
vercel --prod     # promote to production
```

### Notes
- **No environment variables** are required — the site is fully static/SSR content.
- Every push to `main` = production deploy; pushes to other branches get
  **preview URLs** automatically.
- If the build ever fails on Vercel, run `npm run build` locally first to see the
  same error.

---

## 5. Accessibility & performance

- Dark mode by default with a persisted light-mode toggle.
- `prefers-reduced-motion` disables animations globally (see `globals.css`).
- 3D scene is `dynamic()`-imported (client-only) so it never blocks first paint;
  a CSS star field renders instantly as a fallback.
- `drei`'s `AdaptiveDpr` + `PerformanceMonitor` scale rendering down on weak GPUs.
- Semantic landmarks, `aria-label`s on icon buttons, keyboard-navigable anchors.

---

Built with Next.js, Three.js, and Framer Motion.
