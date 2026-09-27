import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiCheck } from "react-icons/fi";

import { STATUS, DOCUMENTS, REGISTER } from "../../data/experience";

const ease = [0.22, 0.61, 0.36, 1];

/* -------------------------------------------------------------- document */
/* A letter, as a plate. Same system as the work section: hairline, no radius,
   mono numerals, a measurement rail along the foot. The preview is set rather
   than scanned — a crop of a real letterhead would carry body text with it. */
const Doc = ({ doc, i }) => {
  const Tag = doc.file ? "a" : "div";
  const props = doc.file
    ? { href: doc.file, download: true, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease, delay: Math.min(i * 0.05, 0.25) }}
    >
      <Tag
        {...props}
        className="plate group block h-full"
        style={{ border: "1px solid var(--hair)", background: "var(--surface)" }}
      >
        {/* the sheet */}
        <span className="relative block px-5 pb-8 pt-6" style={{ borderBottom: "1px solid var(--hair)" }}>
          <span className="flex items-start justify-between gap-3">
            <span className="font-mono text-[12.5px] tabular-nums tracking-[0.1em] text-faint">{doc.n}</span>
            <span className="font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted">
              {doc.dated || "Undated"}
            </span>
          </span>

          <span className="mt-6 block font-display text-[1.18rem] font-semibold leading-tight tracking-tight">
            {doc.org}
          </span>
          <span className="mt-1.5 block text-[14px] leading-snug text-muted">{doc.kind}</span>

          {/* signature line */}
          <span className="mt-7 block">
            <span
              aria-hidden="true"
              className="mb-2 block h-px w-16"
              style={{ background: "var(--hair-hard)" }}
            />
            <span className="block text-[14px] leading-snug text-ink">{doc.issuer}</span>
            <span className="block text-[12.5px] leading-snug text-muted">{doc.issuerRole}</span>
          </span>

          {/* measurement rail */}
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-[5px] items-end">
            {Array.from({ length: 22 }).map((_, k) => (
              <span
                key={k}
                className="flex-1"
                style={{ height: k % 7 === 0 ? "5px" : "2px", background: "var(--plate-rail)", marginRight: "1px" }}
              />
            ))}
          </span>
        </span>

        {/* what it certifies + the action */}
        <span className="block px-5 py-4">
          <span className="block text-[14px] leading-snug text-muted">{doc.certifies}</span>
          <span
            className="mt-3 flex items-center gap-1.5 font-mono text-[12.5px] uppercase tracking-[0.16em]"
            style={{ color: doc.file ? "var(--accent)" : "var(--faint)" }}
          >
            {doc.file ? (
              <>
                Download PDF
                <FiArrowDown className="transition-transform duration-300 group-hover:translate-y-px" />
              </>
            ) : (
              "Held · available on request"
            )}
          </span>
          {doc.redacted && (
            <span className="mt-2 block font-mono text-[12.5px] uppercase tracking-[0.14em] text-faint">
              {doc.redacted}
            </span>
          )}
        </span>
      </Tag>
    </motion.div>
  );
};

/* ---------------------------------------------------------------- section */
const Experience = () => (
  <section id="experience" className="relative">
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
            <span className="font-mono text-[12.5px] text-accent">/</span>
            <span className="tag">Experience</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
            Four letters.
            <br />
            Every date checkable.
          </h2>
        </div>
        <div className="lgl:col-span-7 lgl:pt-2">
          <p className="max-w-[54ch] text-[15px] leading-[1.75] text-muted text-pretty">
            Every title and date below comes from a signed letter I hold. Two are
            attached here; both employers can be contacted to confirm the rest.
          </p>
        </div>
      </motion.div>

      {/* the dossier */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sml:grid-cols-2 lgl:grid-cols-4">
        {DOCUMENTS.map((d, i) => (
          <Doc key={d.id} doc={d} i={i} />
        ))}
      </div>

      {/* right-to-work band — what a Saudi employer checks first */}
      <dl
        className="statusband mt-14 grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-4"
        style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}
      >
        {STATUS.map(({ k, v, lead }) => (
          <div key={k} className="py-5 pr-6">
            <dt className="tag mb-1.5">{k}</dt>
            <dd className="text-[14.5px] leading-snug" style={{ color: lead ? "var(--accent)" : "var(--ink)" }}>
              {v}
            </dd>
          </div>
        ))}
      </dl>

      {/* the register */}
      <div className="mt-14">
        <div
          className="hidden grid-cols-12 gap-6 pb-3 lgl:grid"
          style={{ borderBottom: "1px solid var(--hair)" }}
        >
          <span className="tag col-span-3">Period</span>
          <span className="tag col-span-4">Role</span>
          <span className="tag col-span-3">Organisation</span>
          <span className="tag col-span-2">Evidence</span>
        </div>

        {REGISTER.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, ease, delay: Math.min(i * 0.04, 0.2) }}
            className="grid grid-cols-1 gap-x-6 gap-y-1.5 py-5 lgl:grid-cols-12"
            style={{ borderBottom: "1px solid var(--hair)" }}
          >
            <div className="lgl:col-span-3">
              <span className="flex items-center gap-2.5">
                {r.current && (
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full" style={{ background: "var(--accent)" }} />
                )}
                <span
                  className="font-mono text-[12.5px] uppercase tracking-[0.13em]"
                  style={{ color: r.current ? "var(--accent)" : "var(--muted)" }}
                >
                  {r.period}
                </span>
              </span>
            </div>

            <div className="lgl:col-span-4">
              <span className="block text-[14.5px] font-medium leading-snug text-ink">
                {r.role}
                {r.promoted && (
                  <span
                    className="ml-2 inline-block translate-y-[-1px] px-1.5 py-0.5 align-middle font-mono text-[12.5px] uppercase tracking-[0.14em]"
                    style={{ color: "var(--accent)", border: "1px solid var(--accent)" }}
                  >
                    Promoted
                  </span>
                )}
              </span>
            </div>

            <div className="lgl:col-span-3">
              <span className="block text-[14.5px] leading-snug text-ink">{r.org}</span>
              <span className="block text-[14px] leading-snug text-muted">{r.orgNote}</span>
            </div>

            <div className="lgl:col-span-2">
              {r.evidence.length ? (
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <FiCheck className="shrink-0 text-accent" />
                  {r.evidence.map((id) => {
                    const d = DOCUMENTS.find((x) => x.id === id);
                    return (
                      <span key={id} className="font-mono text-[12.5px] tabular-nums tracking-[0.1em] text-muted">
                        {d.n}
                      </span>
                    );
                  })}
                </span>
              ) : r.held ? (
                <FiCheck className="text-accent" aria-label="Documented" />
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
