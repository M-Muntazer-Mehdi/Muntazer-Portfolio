import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 0.61, 0.36, 1];

/* Five stages on one rail. Each carries a citation from the work above, so the
   section reads as a register of how things were actually built rather than as
   a statement of values. */
const STAGES = [
  {
    n: "01",
    title: "Define",
    text: "Ambiguous requirements become explicit behaviour, boundaries and acceptance criteria.",
    cite: "QUIZiALL — a written acceptance standard",
  },
  {
    n: "02",
    title: "Design",
    text: "Architecture chosen around change: layered systems, clear interfaces, isolated concerns.",
    cite: "GVRN — tenant isolation in the database",
  },
  {
    n: "03",
    title: "Build",
    text: "Full-stack ownership across web, mobile, APIs, databases and AI integrations.",
    cite: "13 products, idea to store",
  },
  {
    n: "04",
    title: "Verify",
    text: "Tests, quality gates, source verification, observability and failure paths.",
    cite: "688 offline tests · accessibility gated in CI",
  },
  {
    n: "05",
    title: "Ship",
    text: "Deploy, monitor, measure, iterate.",
    cite: "App Store · Google Play · Vercel · EC2",
  },
];

const EngineeringSystem = () => (
  <section id="system" className="relative">
    <div className="mx-auto max-w-screen-xl px-5 lgl:px-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
        className="grid gap-8 pb-12 pt-20 lgl:grid-cols-12 lgl:pt-28"
      >
        <div className="lgl:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[11px] text-accent">/</span>
            <span className="tag">Engineering system</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
            How I build software.
          </h2>
        </div>
        <div className="lgl:col-span-7 lgl:pt-2">
          <p className="max-w-[54ch] text-[15px] leading-[1.75] text-muted text-pretty">
            The same five stages on every product, whatever the stack. Each one below
            cites where it actually happened.
          </p>
        </div>
      </motion.div>

      {/* the rail */}
      <div className="relative" style={{ borderTop: "1px solid var(--hair)" }}>
        {/* tick marks — one per stage, on the rail itself */}
        <span aria-hidden="true" className="absolute inset-x-0 -top-px hidden lgl:flex">
          {STAGES.map((s) => (
            <span key={s.n} className="flex-1">
              <span className="block h-2 w-px" style={{ background: "var(--accent)" }} />
            </span>
          ))}
        </span>

        <ol className="grid grid-cols-1 sml:grid-cols-2 lgl:grid-cols-5">
          {STAGES.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease, delay: Math.min(i * 0.07, 0.35) }}
              className="relative py-7 pr-7"
              style={{ borderTop: "1px solid var(--hair)" }}
            >
              {/* flow arrow between stages, desktop only */}
              {i < STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-1 top-[34px] hidden font-mono text-[11px] lgl:block"
                  style={{ color: "var(--faint)" }}
                >
                  →
                </span>
              )}

              <span className="font-mono text-[11px] tabular-nums tracking-[0.1em] text-faint">
                {s.n}
              </span>

              <h3 className="mt-2.5 font-display text-[1.15rem] font-semibold leading-tight tracking-tight">
                {s.title}
              </h3>

              <p className="mt-2 max-w-[34ch] text-[13px] leading-[1.6] text-muted text-pretty">
                {s.text}
              </p>

              <p
                className="mt-4 border-l pl-2.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.13em]"
                style={{ borderColor: "var(--accent)", color: "var(--muted)" }}
              >
                {s.cite}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default EngineeringSystem;
