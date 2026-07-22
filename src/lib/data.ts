/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Every piece of portfolio content lives here. Edit this file to
 *  update the whole site — no component surgery required.
 *
 *  ⚠️  PLACEHOLDERS TO FILL IN are marked with  // TODO
 * ─────────────────────────────────────────────────────────────
 */

import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cpu,
  Database,
  Cloud,
  BarChart3,
  Code2,
  HeartPulse,
  Globe2,
  Wrench,
  Network,
} from "lucide-react";

/* ============================================================
 *  SITE / PERSONAL CONFIG
 * ========================================================== */
export const site = {
  name: "Freny Reji",
  role: "Data Scientist · ML & AI Engineer",
  headline: "I build AI systems that turn messy signals into trustworthy decisions.",
  subheadline:
    "M.S. Data Science @ Indiana University. I ship end-to-end ML — from agentic LLM systems and clinical early-warning models to geospatial dashboards that stakeholders actually use.",
  location: "Bloomington, IN",
  phone: "+1 (930) 333-7048",
  email: "freny.reji.ds@gmail.com",
  resumeFile: "/Freny_Reji_AI_Engineer_Resume.pdf",
  url: "https://freny-reji.vercel.app", // TODO: update to your final Vercel domain
  // ---- Social links ----
  github: "https://github.com/freny24",
  linkedin: "https://www.linkedin.com/in/freny-reji", // TODO: replace with your exact LinkedIn URL
} as const;

/* ============================================================
 *  NAVIGATION
 * ========================================================== */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Missions", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
] as const;

/* ============================================================
 *  ABOUT — narrative + quick stats
 * ========================================================== */
export const about = {
  intro: [
    "I'm a data scientist and AI engineer finishing my M.S. in Data Science at Indiana University. I like the unglamorous middle of the pipeline — the feature engineering, the leakage checks, the evaluation harnesses — because that's where a model earns trust.",
    "My work spans agentic LLM systems, clinical machine learning, behavioral-finance analytics, and satellite geospatial science. Across all of it I care about the same thing: shipping something a real stakeholder can rely on, not a notebook that only runs on my laptop.",
  ],
  stats: [
    { value: "0.952", label: "AUROC — Sepsis early-warning ensemble" },
    { value: "60%", label: "Faster vulnerability analysis at Nokia" },
    { value: "3,000+", label: "CVEs auto-matched with HDBSCAN + LLMs" },
    { value: "$3,000", label: "Competitive research fellowship, IU" },
  ],
  interests: [
    "Agentic & Retrieval-Augmented systems",
    "Healthcare & clinical ML",
    "Geospatial / Earth-observation ML",
    "Trustworthy & evaluable AI",
  ],
};

/* ============================================================
 *  EXPERIENCE
 * ========================================================== */
export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Graduate Research Assistant — Data Visualization, Floating Solar Energy",
    org: "O'Neill School of Public & Environmental Affairs, Indiana University",
    location: "Bloomington, IN",
    period: "Jan 2026 – Present",
    bullets: [
      "Selected for a competitive $3,000 fellowship to process satellite time-series data for 100+ global water bodies using ML workflows in Python and Google Earth Engine.",
      "Build interactive dashboards integrating geospatial maps, ecological indicators, and trend analysis with JavaScript, SQL, Plotly, and Leaflet for interdisciplinary research stakeholders.",
    ],
  },
  {
    role: "Machine Learning & Automation Intern",
    org: "Nokia",
    location: "Bengaluru, India",
    period: "Aug 2023 – May 2024",
    bullets: [
      "Reduced vulnerability-analysis time by 60% by automating component-vulnerability matching across 3,000+ CVEs using HDBSCAN clustering and LLM-based entity linking — directly applicable to Telco KPI anomaly-detection workflows.",
      "Improved detection accuracy by 40% via transformer-based semantic similarity scoring, validating ML pipelines for production deployment.",
      "Increased test coverage 35% and cut debugging time 25% by building optimized Robot Framework automation suites with CI/CD integration.",
    ],
  },
];

/* ============================================================
 *  PROJECTS ("Missions")
 *  Each project is framed as a mission. Placeholder projects
 *  (verified = false) render with a "Coming online" badge and
 *  editable fields — fill them in and flip verified to true.
 * ========================================================== */
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  missionType: "Mission Control" | "Research Lab" | "Launch Pad" | "Satellite Dashboard";
  year: string;
  verified: boolean;
  featured?: boolean;
  problem: string;
  approach: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  challenges?: string;
  impact?: string;
  lessons?: string;
  links: { github?: string; demo?: string; demoLabel?: string };
};

export const projects: Project[] = [
  {
    slug: "sourcetrace",
    title: "SourceTrace",
    tagline: "Agentic research assistant with a red-teamed defense layer",
    category: "LLM & Agentic AI",
    missionType: "Mission Control",
    year: "2026",
    verified: true,
    featured: true,
    problem:
      "General-purpose chatbots answer confidently but can't show their work — they hallucinate, cite nothing, and are trivially hijacked by malicious content pulled in from the web.",
    approach: [
      "Built an agentic RAG assistant on Claude's tool-use API in a ReAct loop with cost-aware query routing, autonomously querying live NewsAPI and Wikipedia to produce cited, confidence-scored answers.",
      "Designed and red-teamed a prompt-injection defense layer — untrusted-data wrapping plus pattern-based scanning — against adversarial retrieved content, validated by an automated adversarial test suite.",
      "Built an LLM-judge evaluation harness comparing agentic vs. naive RAG across a 15-question set, showing a consistent relevance gain (+1.0 to +1.6 pts) across repeated runs.",
    ],
    stack: [
      "Claude API",
      "ReAct Agents",
      "RAG",
      "Prompt-Injection Defense",
      "LLM-as-Judge",
      "NewsAPI",
      "Python",
    ],
    metrics: [
      { value: "+1.0–1.6", label: "Relevance pts vs. naive RAG" },
      { value: "100%", label: "Answers cited & confidence-scored" },
      { value: "ReAct", label: "Cost-aware agent routing" },
    ],
    challenges:
      "Retrieved web content is untrusted by definition. Separating instructions from data — so an article couldn't tell the agent what to do — required a wrapping scheme plus an adversarial test suite that actively tried to break it.",
    impact:
      "Turns an LLM from a confident guesser into an auditable researcher: every claim is traceable to a source and scored for confidence.",
    lessons:
      "Evaluation is a feature, not an afterthought. An LLM-judge harness made 'is the agent actually better?' a measurable question instead of a vibe.",
    links: {
      github: "https://github.com/freny24/sourcetrace",
      demo: "https://sourcetrace.onrender.com/",
      demoLabel: "Live Demo",
    },
  },
  {
    slug: "sepsis-early-warning",
    title: "Sepsis Early Warning System",
    tagline: "Clinical ML that flags deterioration before the crash",
    category: "Healthcare AI",
    missionType: "Mission Control",
    year: "2026",
    verified: true,
    featured: true,
    problem:
      "Sepsis kills when it's caught late. Clinicians need a calibrated, early risk signal from noisy ICU time-series — one they can trust enough to act on, without drowning in false alarms.",
    approach: [
      "Built an end-to-end clinical ML pipeline on synthetic ICU time-series with SOFA-based feature engineering (delta-vitals, rolling stats, shock index).",
      "Trained an XGBoost + LSTM ensemble with isotonic probability calibration, using strict patient-level train/test splits to prevent leakage.",
      "Designed a FastAPI backend and React/Recharts dashboard with a cohort explorer, per-patient risk timeline, and an interactive alert-threshold tuner.",
    ],
    stack: [
      "XGBoost",
      "LSTM",
      "Isotonic Calibration",
      "FastAPI",
      "React",
      "Recharts",
      "Vercel",
    ],
    metrics: [
      { value: "0.952", label: "AUROC" },
      { value: "85.2%", label: "Sensitivity" },
      { value: "10", label: "Alerts / 100 patient-days" },
    ],
    challenges:
      "Preventing data leakage. Patient-level splits (not random row splits) were non-negotiable — otherwise the model 'cheats' by seeing the same patient in train and test, and the AUROC becomes a lie.",
    impact:
      "A calibrated risk score plus a tunable alert threshold lets a care team dial the sensitivity/alert-fatigue trade-off to their own tolerance.",
    lessons:
      "Calibration matters as much as ranking. A well-ordered but miscalibrated probability is dangerous when a human treats 0.8 as '80% likely'.",
    links: {
      github: "https://github.com/freny24", // TODO: replace with the sepsis repo URL
      demo: "",
      demoLabel: "Live Dashboard",
    },
  },
  {
    slug: "smart-money-pulse",
    title: "Smart Money Pulse",
    tagline: "Behavioral-finance stress detection at transaction scale",
    category: "Data Engineering & Analytics",
    missionType: "Satellite Dashboard",
    year: "2026",
    verified: true,
    problem:
      "Financial stress shows up in behavior long before it shows up on a balance sheet. The signal is buried across tens of thousands of transactions and needs a reproducible pipeline, not a one-off query.",
    approach: [
      "Built a stress-detection pipeline in DuckDB using SQL window functions across 47K+ synthetic transactions.",
      "Orchestrated a 3-layer dbt DAG on Airflow for reproducible, tested transformations.",
      "Surfaced a 4-tier cohort risk score through a Streamlit dashboard for fast exploration.",
    ],
    stack: ["DuckDB", "SQL", "dbt", "Airflow", "Streamlit", "Python"],
    metrics: [
      { value: "47K+", label: "Transactions processed" },
      { value: "3-layer", label: "dbt DAG on Airflow" },
      { value: "4-tier", label: "Cohort risk score" },
    ],
    challenges:
      "Making analytics reproducible. A layered dbt DAG with tests turns 'a SQL script that worked once' into a pipeline you can trust and re-run.",
    impact:
      "A tiered risk score gives analysts a ranked cohort to act on instead of a flat table of raw transactions.",
    lessons:
      "Modern data-stack ergonomics (DuckDB + dbt) make rigorous analytics engineering feasible for a single developer.",
    links: {
      github: "https://github.com/freny24", // TODO: replace with the Smart Money Pulse repo URL
      demo: "",
      demoLabel: "Live Dashboard",
    },
  },
  {
    slug: "hype-vs-box-office",
    title: "Hype vs. Box Office",
    tagline: "Predicting opening weekend from pre-release sentiment",
    category: "NLP & Predictive Modeling",
    missionType: "Launch Pad",
    year: "2025",
    verified: true,
    problem:
      "Studios spend fortunes on marketing, but does online buzz actually predict money? Turning unstructured Reddit/TMDB chatter into a revenue forecast is a messy NLP-to-regression problem.",
    approach: [
      "Built an NLP pipeline combining VADER with a fine-tuned DistilBERT over Reddit/TMDB data for 512 films.",
      "Trained XGBoost with SHAP explanations to predict opening-weekend revenue and understand which signals drove predictions.",
    ],
    stack: ["VADER", "DistilBERT", "XGBoost", "SHAP", "Python", "NLP"],
    metrics: [
      { value: "R² 0.71", label: "Opening-weekend revenue fit" },
      { value: "512", label: "Films analyzed" },
      { value: "SHAP", label: "Explainable drivers" },
    ],
    challenges:
      "Sentiment alone is a weak signal. Combining a lexicon model (VADER) with a fine-tuned transformer captured both broad tone and nuanced context.",
    impact:
      "SHAP made the model interpretable — showing which sentiment and metadata features actually moved the revenue forecast.",
    lessons:
      "Explainability turns a prediction into an argument a stakeholder can reason about.",
    links: {
      github: "https://github.com/freny24", // TODO: replace with the Hype vs Box Office repo URL
      demo: "",
      demoLabel: "Live Dashboard",
    },
  },
  /* ---------- PLACEHOLDER MISSIONS (verified: false) ----------
   * These came from your brief but aren't on your resume and I
   * couldn't reach GitHub to confirm them. Fill in the details
   * and set verified: true to bring each one online. Delete any
   * you don't want.
   */
  {
    slug: "floating-pv-dashboard",
    title: "Floating Photovoltaics Global Dashboard",
    tagline: "Satellite time-series → interactive geospatial insight",
    category: "Geospatial Data Science",
    missionType: "Satellite Dashboard",
    year: "2026",
    verified: false,
    problem:
      "Placeholder — describe the floating-solar / water-body monitoring problem this dashboard addresses.",
    approach: [
      "Placeholder — outline the Google Earth Engine + ML workflow.",
      "Placeholder — describe the Plotly/Leaflet dashboard.",
    ],
    stack: ["Google Earth Engine", "Python", "Plotly", "Leaflet", "SQL", "JavaScript"],
    metrics: [
      { value: "100+", label: "Global water bodies" },
      { value: "—", label: "Add a metric" },
    ],
    links: { github: "https://github.com/freny24", demo: "" },
  },
  {
    slug: "clinical-notes-summarizer",
    title: "AI Clinical Notes Summarizer",
    tagline: "Placeholder mission — fill in from your repo",
    category: "Healthcare AI",
    missionType: "Research Lab",
    year: "2025",
    verified: false,
    problem: "Placeholder — describe the clinical summarization problem.",
    approach: ["Placeholder — describe the model and pipeline."],
    stack: ["Transformers", "HuggingFace", "Python"],
    metrics: [{ value: "—", label: "Add a metric" }],
    links: { github: "https://github.com/freny24", demo: "" },
  },
];

/* ============================================================
 *  SKILLS — Mission Control dashboard
 * ========================================================== */
export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  accent: string; // tailwind text/border color hint
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "LLM & GenAI",
    icon: Brain,
    accent: "#8b5cf6",
    skills: [
      "Claude API",
      "ReAct Agents",
      "RAG",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "LLM-as-Judge Eval",
      "Prompt-Injection Defense",
      "LangGraph",
    ],
  },
  {
    name: "Machine Learning",
    icon: Cpu,
    accent: "#38e1ff",
    skills: [
      "XGBoost",
      "LSTM",
      "Vision Transformers",
      "CNNs",
      "NLP",
      "HDBSCAN",
      "Statistical Modeling",
      "End-to-End ML Pipelines",
      "Time-series Analysis",
    ],
  },
  {
    name: "Healthcare AI",
    icon: HeartPulse,
    accent: "#e3350d",
    skills: [
      "Clinical ML",
      "SOFA Feature Engineering",
      "Probability Calibration",
      "Patient-level Validation",
      "Risk Scoring",
    ],
  },
  {
    name: "Geospatial Analytics",
    icon: Globe2,
    accent: "#00af4d",
    skills: [
      "Google Earth Engine",
      "Satellite Time-series",
      "Leaflet",
      "Ecological Indicators",
      "Geospatial Mapping",
    ],
  },
  {
    name: "Programming",
    icon: Code2,
    accent: "#ffcf00",
    skills: ["Python", "SQL", "R", "Java", "JavaScript", "Unix Shell", "HTML/CSS"],
  },
  {
    name: "Frameworks & Deployment",
    icon: Wrench,
    accent: "#a5b4fc",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "HuggingFace",
      "scikit-learn",
      "FastAPI",
      "Flask",
      "Streamlit",
      "Docker",
      "pytest",
    ],
  },
  {
    name: "Data Engineering",
    icon: Database,
    accent: "#38e1ff",
    skills: ["DuckDB", "dbt", "Airflow", "SQL Window Functions", "ETL/ELT"],
  },
  {
    name: "Cloud & Ops",
    icon: Cloud,
    accent: "#0d69b4",
    skills: ["AWS", "Docker", "CI/CD", "Vercel", "Render"],
  },
  {
    name: "Visualization",
    icon: BarChart3,
    accent: "#8b5cf6",
    skills: ["Plotly", "Recharts", "Leaflet", "SHAP", "Streamlit Dashboards"],
  },
];

/* ============================================================
 *  TIMELINE — career roadmap
 * ========================================================== */
export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  kind: "education" | "research" | "work" | "project" | "future";
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2019 – 2024",
    title: "Integrated M.Tech, Artificial Intelligence",
    org: "Vellore Institute of Technology",
    kind: "education",
    detail: "GPA 8.8/10. Five-year integrated program building AI fundamentals end to end.",
  },
  {
    year: "2023 – 2024",
    title: "ML & Automation Intern",
    org: "Nokia · Bengaluru",
    kind: "work",
    detail:
      "Automated CVE-to-component matching with HDBSCAN + LLM entity linking; cut analysis time 60%.",
  },
  {
    year: "2024 – 2026",
    title: "M.S., Data Science",
    org: "Indiana University, Bloomington",
    kind: "education",
    detail: "GPA 3.53/4.0. Focus on applied ML, healthcare AI, and agentic systems.",
  },
  {
    year: "2025",
    title: "Hype vs. Box Office",
    org: "NLP + Predictive Modeling",
    kind: "project",
    detail: "Fine-tuned DistilBERT + XGBoost/SHAP predicting opening-weekend revenue (R² 0.71).",
  },
  {
    year: "2026",
    title: "SourceTrace & Sepsis Early Warning",
    org: "Agentic AI · Healthcare ML",
    kind: "project",
    detail: "Red-teamed agentic RAG assistant and a 0.952-AUROC clinical early-warning system.",
  },
  {
    year: "2026 – Present",
    title: "Graduate Research Assistant",
    org: "O'Neill School, IU · Floating Solar",
    kind: "research",
    detail: "$3,000 fellowship processing satellite time-series for 100+ water bodies.",
  },
  {
    year: "Next",
    title: "Data Scientist / ML / AI Engineer",
    org: "Healthcare · Geospatial · Applied AI",
    kind: "future",
    detail: "Seeking roles where trustworthy, well-evaluated ML ships to real users.",
  },
];

/* ============================================================
 *  CERTIFICATIONS
 * ========================================================== */
export const certifications = [
  "Amazon ML Summer School Participant",
  "IBM AI Developer Associate",
  "SQL Fundamentals — DataCamp",
];

/* ============================================================
 *  EDUCATION (quick reference)
 * ========================================================== */
export const education = [
  {
    school: "Indiana University, Bloomington",
    degree: "M.S., Data Science",
    period: "Aug 2024 – May 2026",
    gpa: "3.53 / 4.0",
  },
  {
    school: "Vellore Institute of Technology",
    degree: "Integrated M.Tech, Artificial Intelligence",
    period: "Jul 2019 – May 2024",
    gpa: "8.8 / 10",
  },
];
