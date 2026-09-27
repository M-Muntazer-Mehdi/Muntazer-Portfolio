/* The four lenses.
   Switching lens repaints the accent across the whole page (data-lens on <html>)
   and swaps the hero copy. Everything claimed here is backed by the signed
   experience letters or by shipped work. */

export const LENS_ORDER = ["fullstack", "web", "mobile", "ai"];

export const LENSES = {
  fullstack: {
    id: "fullstack",
    index: "01",
    tab: "Full Stack",
    label: "Full-Stack Engineering",
    eyebrow: "Senior Full-Stack Engineer",
    headline: ["I ship the", "whole thing."],
    accentIndex: 1,
    sub: "App, API, database, and AI when the product needs it.",
    blurb:
      "I take products from an empty repository to the store and production. One engineer across the stack means fewer handoffs, fewer seams, and systems designed to work as one.",
    stack: ["React Native", "Next.js", "NestJS", "Laravel", "PostgreSQL", "Python"],
    proof: "20 products shipped across 2025 and 2026 — mobile, web, backend and AI.",
  },

  web: {
    id: "web",
    index: "02",
    tab: "Web",
    label: "Web Platforms",
    eyebrow: "Web Platform Engineer",
    headline: ["Interfaces that", "hold up."],
    accentIndex: 1,
    sub: "Web platforms built to perform, scale, and stay accessible.",
    blurb:
      "Accessibility tested in continuous integration rather than bolted on before launch — automated WCAG checks, colour-vision simulation, and contrast baselines that run on every pull request and fail the build when they regress.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Laravel", "PostgreSQL"],
    proof: "Automated accessibility gates running in CI on production platforms.",
  },

  mobile: {
    id: "mobile",
    index: "03",
    tab: "Mobile",
    label: "Mobile Engineering",
    eyebrow: "Mobile Engineer",
    headline: ["Native where", "it matters."],
    accentIndex: 1,
    sub: "React Native on the New Architecture, and Flutter.",
    blurb:
      "Offline-first sync, native module bridging, and the unglamorous parts — background queues, conflict resolution, store review. Apps that are live and installed, not screenshots of apps.",
    stack: ["React Native", "Flutter", "Swift / Kotlin bridging", "Firebase", "SQLite"],
    proof: "Shipped to the App Store and Google Play, including offline-first messaging.",
  },

  ai: {
    id: "ai",
    index: "04",
    tab: "AI",
    label: "Applied AI",
    eyebrow: "Applied AI Engineer",
    headline: ["AI you can", "audit."],
    accentIndex: 1,
    sub: "Pipelines that show their working, not just their answer.",
    blurb:
      "Multi-stage LLM pipelines with output verification, JSON repair, and retries — built with governance requirements in mind, including RICS Responsible AI guidance, the EU AI Act, and ISO/IEC 42001, with append-only audit trails behind every decision the system records.",
    stack: ["LLM pipelines", "RAG", "FastAPI", "n8n", "Python", "Row-level security"],
    proof: "Governed AI systems built to a published responsible-AI standard.",
  },
};

/* Constant across lenses — this part is about the person, not the discipline. */
export const LEDGER = [
  { k: "Role",    v: "Senior Full-Stack Engineer" },
  { k: "Now",     v: "Lead Developer, Skyline Digitals" },
  { k: "Client",  v: "Feenix Limited, United Kingdom" },
  { k: "Based",   v: "Madinah, Saudi Arabia" },
];

export const SOCIALS = {
  github: "https://github.com/M-Muntazer-Mehdi",
  linkedin: "https://www.linkedin.com/in/m-muntazer-mehdi/",
  email: "mailto:muntazer.mehdi.rizvi@gmail.com",
};

/* Every id here must exist as a <section id> — a nav item pointing at a
   section that was removed simply does nothing when clicked. */
export const NAV_LINKS = [
  { id: "work",       title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "system",     title: "Approach" },
  { id: "toolchain",  title: "Stack" },
  { id: "contact",    title: "Contact" },
];
