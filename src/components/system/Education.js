import React from "react";
import { motion } from "framer-motion";

import { EDUCATION } from "../../data/education";

const ease = [0.22, 0.61, 0.36, 1];
const SPAN = EDUCATION.to - EDUCATION.from;

const Education = () => (
  <section id="education" className="relative">
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
            <span className="font-mono text-[12.5px] text-accent">/</span>
            <span className="tag">2016 — 2024</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
            Education.
          </h2>
        </div>
        <div className="lgl:col-span-7 lgl:pt-2">
          <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted text-pretty">
            Faisalabad, start to finish. The last four years are the degree — and
            two of those were spent teaching the subject as well as taking it.
          </p>
        </div>
      </motion.div>

      {/* the span — segments sized by how long each actually took */}
      <div className="relative">
        {/* year scale */}
        <div className="mb-2.5 hidden lgl:block">
          <div className="relative h-4">
            {[...Array(SPAN / 2 + 1)].map((_, i) => {
              const year = EDUCATION.from + i * 2;
              return (
                <span
                  key={year}
                  className="absolute top-0 -translate-x-1/2 font-mono text-[12.5px] tabular-nums tracking-[0.1em] text-faint"
                  style={{ left: `${((year - EDUCATION.from) / SPAN) * 100}%` }}
                >
                  {year}
                </span>
              );
            })}
          </div>
        </div>

        <ol
          className="grid grid-cols-1 gap-y-7 lgl:gap-y-0"
          style={{ gridTemplateColumns: undefined }}
        >
          <li className="hidden lgl:block">
            <div className="grid" style={{ gridTemplateColumns: `repeat(${SPAN}, minmax(0,1fr))` }}>
              {EDUCATION.stages.map((s) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease, delay: (s.from - EDUCATION.from) * 0.05 }}
                  className="relative pr-8"
                  style={{
                    gridColumn: `span ${s.to - s.from} / span ${s.to - s.from}`,
                    borderTop: `1px solid ${s.lead ? "var(--accent)" : "var(--hair-hard)"}`,
                  }}
                >
                  {/* start tick */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 block h-2 w-px"
                    style={{ background: s.lead ? "var(--accent)" : "var(--hair-hard)" }}
                  />

                  <p
                    className="pt-4 font-mono text-[12.5px] uppercase tracking-[0.15em]"
                    style={{ color: s.lead ? "var(--accent)" : "var(--faint)" }}
                  >
                    {s.from} — {s.to}
                    <span className="ml-2 text-faint">{s.to - s.from} yrs</span>
                  </p>

                  <h3 className="mt-2.5 font-display text-[1.15rem] font-semibold leading-tight tracking-tight">
                    {s.award}
                  </h3>
                  <p className="mt-1.5 max-w-[30ch] text-[14.5px] leading-snug text-muted">{s.place}</p>
                  {s.note && <p className="mt-1 text-[14px] leading-snug text-muted">{s.note}</p>}

                  {s.mark && (
                    <p className="mt-4 border-l pl-2.5" style={{ borderColor: "var(--accent)" }}>
                      <span className="block font-mono text-[12.5px] uppercase tracking-[0.15em] text-faint">
                        {s.mark.label}
                      </span>
                      <span className="mt-0.5 block text-[14px] leading-snug text-ink">
                        {s.mark.value}
                      </span>
                    </p>
                  )}

                  {s.inside && (
                    <ul className="mt-4 space-y-1.5">
                      {s.inside.map((t) => (
                        <li key={t.label} className="flex gap-2.5">
                          <span className="shrink-0 font-mono text-[12.5px] tabular-nums text-accent">{t.year}</span>
                          <span className="text-[14px] leading-snug text-muted">{t.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </li>

          {/* stacked, small screens */}
          {EDUCATION.stages.map((s) => (
            <li
              key={s.id}
              className="lgl:hidden"
              style={{ borderTop: `1px solid ${s.lead ? "var(--accent)" : "var(--hair-hard)"}` }}
            >
              <p
                className="pt-4 font-mono text-[12.5px] uppercase tracking-[0.15em]"
                style={{ color: s.lead ? "var(--accent)" : "var(--faint)" }}
              >
                {s.from} — {s.to}
                <span className="ml-2 text-faint">{s.to - s.from} yrs</span>
              </p>
              <h3 className="mt-2 font-display text-[1.1rem] font-semibold leading-tight tracking-tight">
                {s.award}
              </h3>
              <p className="mt-1 text-[14.5px] leading-snug text-muted">{s.place}</p>
              {s.mark && (
                <p className="mt-3 border-l pl-2.5" style={{ borderColor: "var(--accent)" }}>
                  <span className="block font-mono text-[12.5px] uppercase tracking-[0.15em] text-faint">
                    {s.mark.label}
                  </span>
                  <span className="mt-0.5 block text-[14px] leading-snug text-ink">{s.mark.value}</span>
                </p>
              )}
              {s.inside && (
                <ul className="mt-3 space-y-1.5">
                  {s.inside.map((t) => (
                    <li key={t.label} className="flex gap-2.5">
                      <span className="shrink-0 font-mono text-[12.5px] tabular-nums text-accent">{t.year}</span>
                      <span className="text-[14px] leading-snug text-muted">{t.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Education;
