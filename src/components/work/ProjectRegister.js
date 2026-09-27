import React from "react";
import { motion } from "framer-motion";

import { PROJECT_REGISTER, REGISTER_NOTE } from "../../data/register";

const ease = [0.22, 0.61, 0.36, 1];

/* An archive, not a second portfolio: a ruled line per project, no images, no
   claims. It exists so the twenty in the hero can be counted. */
const ProjectRegister = () => (
  <section id="register" className="relative">
    <div className="mx-auto max-w-screen-xl px-5 lgl:px-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
        className="grid gap-8 pb-10 pt-20 lgl:grid-cols-12 lgl:pt-24"
      >
        <div className="lgl:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[12.5px] text-accent">/</span>
            <span className="tag">Project register</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
            Other shipped work.
          </h2>
        </div>
        <div className="lgl:col-span-7 lgl:pt-2">
          <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted text-pretty">
            Projects that do not need a full case study here. {REGISTER_NOTE}.
          </p>
        </div>
      </motion.div>

      <div>
        <div
          className="hidden grid-cols-12 gap-6 pb-3 lgl:grid"
          style={{ borderBottom: "1px solid var(--hair)" }}
        >
          <span className="tag col-span-1">No.</span>
          <span className="tag col-span-3">Project</span>
          <span className="tag col-span-5">What it is</span>
          <span className="tag col-span-2">Client</span>
          <span className="tag col-span-1 text-right">Year</span>
        </div>

        {PROJECT_REGISTER.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, ease, delay: Math.min(i * 0.04, 0.2) }}
            className="grid grid-cols-1 gap-x-6 gap-y-1 py-5 lgl:grid-cols-12 lgl:items-baseline"
            style={{ borderBottom: "1px solid var(--hair)" }}
          >
            <span className="font-mono text-[12.5px] tabular-nums text-faint lgl:col-span-1">
              {p.n}
            </span>
            <span className="font-display text-[16px] font-semibold leading-tight tracking-tight lgl:col-span-3">
              {p.name}
            </span>
            <span className="text-[14px] leading-snug text-muted lgl:col-span-5">{p.what}</span>
            <span className="text-[13px] leading-snug text-muted lgl:col-span-2">{p.client}</span>
            <span className="font-mono text-[12.5px] tabular-nums text-muted lgl:col-span-1 lgl:text-right">
              {p.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectRegister;
