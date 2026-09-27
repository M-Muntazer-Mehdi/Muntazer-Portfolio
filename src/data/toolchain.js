/* Toolchain.
   ------------------------------------------------------------------
   No ratings. Each figure is the number of real projects that ship the
   technology, derived on 2026-09-27 from two sources merged:

     · a dependency scan of all 40 local repositories — package.json,
       requirements.txt, pubspec.yaml, composer.json, Dockerfile,
       .github/workflows, and hand-written .kt/.swift (React Native
       boilerplate such as AppDelegate.swift excluded), grouped from
       repositories into the projects they belong to
     · the `stack` arrays of the thirteen case studies on this site

   Learning repositories (All-About-React, All-About-ReactNative,
   CRICBUZZ) and this portfolio itself are excluded from every count.

   C# is absent because it appears in no repository at all. */

export const TOOLCHAIN = [
  {
    group: "Web",
    items: [
      { name: "TypeScript", n: 16 },
      { name: "React", n: 15 },
      { name: "Tailwind", n: 11 },
      { name: "Next.js", n: 7 },
      { name: "Framer Motion", n: 6 },
      { name: "React Router", n: 5 },
      { name: "Vite", n: 4 },
    ],
  },
  {
    group: "Mobile",
    items: [
      { name: "React Native", n: 7 },
      { name: "Swift", n: 3 },
      { name: "Flutter", n: 2 },
      { name: "Dart", n: 2 },
      { name: "Kotlin", n: 1 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", n: 3 },
      { name: "Express", n: 3 },
      { name: "Python", n: 4 },
      { name: "Puppeteer", n: 2 },
      { name: "NestJS", n: 1 },
      { name: "FastAPI", n: 1 },
      { name: "Laravel", n: 1 },
      { name: "Java", n: 1 },
    ],
  },
  {
    group: "Data",
    items: [
      { name: "PostgreSQL", n: 7 },
      { name: "Firebase", n: 6 },
      { name: "Supabase", n: 4 },
      { name: "MySQL", n: 2 },
      { name: "Prisma", n: 2 },
      { name: "SQLite", n: 2 },
      { name: "TypeORM", n: 1 },
    ],
  },
  {
    group: "AI",
    items: [
      { name: "OpenAI", n: 5 },
      { name: "Claude", n: 1 },
      { name: "Gemini", n: 1 },
      { name: "Whisper", n: 1 },
      { name: "Replicate", n: 1 },
      { name: "Embeddings & retrieval", n: 1 },
      { name: "PyTorch", n: 1 },
    ],
  },
  {
    group: "Delivery",
    items: [
      { name: "GitHub Actions", n: 8 },
      { name: "Jest", n: 6 },
      { name: "Vercel", n: 4 },
      { name: "AWS", n: 3 },
      { name: "Docker", n: 3 },
      { name: "Sentry", n: 1 },
      { name: "Playwright", n: 1 },
    ],
  },
];

/* Foundations.
   ------------------------------------------------------------------
   Coursework, not shipped products — kept out of the counts above so
   those stay a claim about professional work. Verified on 2026-09-27
   against the public GitHub account: C# in Inventory-Tracker; Java in
   Arabic-Dictionary, Mobile-Dev-Hub and Software-Architecture-Hub;
   C++ in CRICBUZZ, Data-Structure-Fundamentals and Snake-and-Ladder;
   Jupyter in Retail-Behavior-Analyzer and Data-Analytics — together the
   second-largest language on the account by volume. */

export const FOUNDATIONS = {
  label: "Foundations",
  note: "Built at university, 2022 \u2013 2024",
  items: ["Java", "C#", "C++", "Python", "Jupyter / data analysis", "Blockchain", "Networking"],
};
