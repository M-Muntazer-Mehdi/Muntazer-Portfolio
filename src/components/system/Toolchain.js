import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { TOOLCHAIN, FOUNDATIONS } from "../../data/toolchain";

const ease = [0.22, 0.61, 0.36, 1];

/* A register, not a skills list. The number beside each entry is how many of
   the case studies above actually ship it, counted from their own stacks. */
const Toolchain = () => {
  const peak = Math.max(...TOOLCHAIN.flatMap((g) => g.items.map((i) => i.n)));

  const groups = useMemo(
    () =>
      TOOLCHAIN.map((g) => ({ ...g, items: [...g.items].sort((a, b) => b.n - a.n) })),
    []
  );

  return (
    <section id="toolchain" className="relative">
      <div className="mx-auto max-w-screen-xl px-5 lgl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="grid gap-8 pb-10 pt-20 lgl:grid-cols-12 lgl:pt-28"
        >
          <div className="lgl:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[11px] text-accent">/</span>
              <span className="tag">Toolchain</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
              Used in shipped work.
            </h2>
          </div>
          <div className="lgl:col-span-7 lgl:pt-2">
            <p className="max-w-[54ch] text-[15px] leading-[1.75] text-muted text-pretty">
              No ratings. The number beside each is how many of the case studies above
              actually ship it \u2014 counted from every repository, not estimated.
            </p>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 gap-x-10 sml:grid-cols-2 lgl:grid-cols-3"
          style={{ borderTop: "1px solid var(--hair)" }}
        >
          {groups.map((g, i) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, ease, delay: Math.min(i * 0.05, 0.25) }}
              className="py-7"
              style={{ borderBottom: "1px solid var(--hair)" }}
            >
              <div className="mb-5 flex items-baseline gap-2.5" style={{ borderBottom: "1px solid var(--hair)" }}>
                <span className="pb-2 font-mono text-[10px] tabular-nums text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="tag pb-2">{g.group}</span>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-3">
                    <span
                      className="w-5 shrink-0 text-right font-mono text-[11px] tabular-nums"
                      style={{ color: "var(--accent)" }}
                    >
                      {it.n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative h-[3px] w-[64px] shrink-0 self-center"
                      style={{ background: "var(--hair)" }}
                    >
                      <span
                        className="absolute inset-y-0 left-0 block"
                        style={{ width: `${Math.max(6, (it.n / peak) * 100)}%`, background: "var(--accent)" }}
                      />
                    </span>
                    <span className="text-[13.5px] leading-snug text-ink">{it.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* foundations — dated on purpose, so nothing here reads as recent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease }}
          className="flex flex-col gap-x-6 gap-y-2 py-6 sml:flex-row sml:items-baseline"
        >
          <p className="tag shrink-0">{FOUNDATIONS.label}</p>
          <p className="flex-1 text-[13px] leading-relaxed text-muted">
            {FOUNDATIONS.items.join("  \u00b7  ")}
          </p>
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            {FOUNDATIONS.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Toolchain;
