/* Employment history.
   ------------------------------------------------------------------
   Every entry here is taken from a SIGNED experience or contribution
   letter Muntazer holds. Nothing is inferred from repos or dates.

   Green Touch overlaps the Alliance Tech period. Muntazer confirmed 2026-09-24
   that it was part-time, so it is labelled as such rather than hidden — the
   overlap is then self-explanatory instead of being a question in an interview.
   Visa wording was approved by Muntazer verbatim on 2026-09-24:
   "Right to work — Transferable visa, Saudi Arabia". Do not reword it.
   ------------------------------------------------------------------ */

export const STATUS = [
  { k: "Based", v: "Madinah, Saudi Arabia" },
  { k: "Right to work", v: "Transferable visa, Saudi Arabia", lead: true },
  { k: "Availability", v: "Open to new roles" },
  { k: "Verification", v: "Signed letters held for every role" },
];



/* ------------------------------------------------------------------ proof
   The four signed letters Muntazer holds, all four downloadable. Every PDF is
   redacted by removing the underlying text, not by drawing a box over it: the
   CNIC is gone from both Alliance Tech letters, and the co-author's name is
   gone from the two joint letters — she is named and assessed in them and has
   not agreed to that being public. Neither Alliance letter carries an issue
   date. */

export const DOCUMENTS = [
  {
    id: "feenix",
    n: "01",
    org: "Feenix Limited",
    kind: "Experience & Contribution Letter",
    issuer: "Micah Stennett",
    issuerRole: "Founder",
    dated: "10 August 2026",
    certifies: "Lead Developer, from 15 December 2025",
    file: "/documents/feenix-experience-letter.pdf",
    redacted: "Co-author's name removed",
  },
  {
    id: "alliance-contribution",
    n: "02",
    org: "Alliance Tech",
    kind: "Projects Contribution Letter",
    issuer: "Muhammad Shahid Khalil",
    issuerRole: "Chief Executive Officer",
    dated: null,
    certifies: "Sole full-stack engineer on PakRiceMarket",
    file: "/documents/alliance-tech-contribution-letter.pdf",
    redacted: "ID number removed",
  },
  {
    id: "alliance-experience",
    n: "03",
    org: "Alliance Tech",
    kind: "Experience Letter",
    issuer: "Muhammad Shahid Khalil",
    issuerRole: "Chief Executive Officer",
    dated: null,
    certifies: "Employment Sep 2024 \u2013 Mar 2025, and the promotion to Senior",
    file: "/documents/alliance-tech-experience-letter.pdf",
    redacted: "ID number removed",
  },
  {
    id: "myhomedoc",
    n: "04",
    org: "MyHomeDoc Telehealth",
    kind: "Letter of Recommendation",
    issuer: "Dr Yasir Ahmed",
    issuerRole: "Medical Director",
    dated: "10 August 2026",
    certifies: "The MyHomeDoc platform, May \u2013 August 2026",
    file: "/documents/myhomedoc-recommendation-letter.pdf",
    redacted: "Co-author's name removed",
  },
];

/* ----------------------------------------------------------------- ledger
   One row per role. The Alliance Tech promotion is two rows rather than one,
   so the register shows the step rather than describing it. */

export const REGISTER = [
  {
    id: "feenix",
    period: "Dec 2025 — now",
    current: true,
    role: "Lead Developer, Full-Stack & Mobile",
    org: "Skyline Digitals",
    orgNote: "for client Feenix Limited, UK",
    evidence: ["feenix"],
  },
  {
    id: "alliance-senior",
    period: "Apr 2025 — Dec 2025",
    promoted: true,
    role: "Senior Full-Stack Software Engineer",
    org: "Alliance Tech (Pvt) Ltd",
    orgNote: "Contract, remote",
    evidence: ["alliance-contribution", "alliance-experience"],
  },
  {
    id: "alliance-full",
    period: "Sep 2024 — Mar 2025",
    role: "Full-Stack Software Engineer",
    org: "Alliance Tech (Pvt) Ltd",
    orgNote: "Contract, remote",
    evidence: ["alliance-experience"],
  },
  {
    id: "greentouch",
    period: "Nov 2024 — Apr 2025",
    role: "React Developer",
    org: "Green Touch",
    orgNote: "Part-time, UAE remote — concurrent with Alliance Tech",
    evidence: [],
    held: true,
  },
  {
    id: "toptal",
    period: "Dec 2023 — Aug 2024",
    role: "Full-Stack Developer",
    org: "Toptal",
    orgNote: "Freelance",
    evidence: [],
    held: true,
  },
  {
    id: "fast",
    period: "Sep 2022 — Jan 2024",
    role: "Teaching Assistant",
    org: "FAST — National University of Computer and Emerging Sciences",
    orgNote: "Also Lab TA, Database Management",
    evidence: [],
    held: true,
  },
];
