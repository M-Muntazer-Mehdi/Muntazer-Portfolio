import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { useApp } from "../../context/AppContext";
import { LENSES, LEDGER, SOCIALS } from "../../data/lenses";
import Portrait from "./Portrait";

/* "framed" = the high-res shot cut from profilePhoto.png
   "cutout"  = bannerImg.png, the suited transparent cut-out */
const PORTRAIT_VARIANT = "cutout";

const ease = [0.22, 0.61, 0.36, 1];

const Hero = () => {
  const { lens } = useApp();
  const L = LENSES[lens];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* engineering paper: a measured grid that fades out before it can shout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden mdl:block"
        style={{
          backgroundImage:
            "linear-gradient(var(--hair) 1px, transparent 1px), linear-gradient(90deg, var(--hair) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          backgroundPosition: "center top",
          maskImage:
            "radial-gradient(120% 90% at 72% -10%, #000 0%, rgba(0,0,0,0.55) 45%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 72% -10%, #000 0%, rgba(0,0,0,0.55) 45%, transparent 78%)",
          opacity: 0.6,
        }}
      />

      {/* a single soft wash of the lens accent, top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 hidden h-[520px] w-[520px] rounded-full blur-[130px] transition-colors duration-700 lgl:block"
        style={{ background: "var(--accent-soft)" }}
      />

      <div className="relative mx-auto max-w-screen-xl px-5 lgl:px-8">
        <div className="grid items-center gap-12 pb-12 pt-12 lgl:grid-cols-12 lgl:gap-10 lgl:pb-16 lgl:pt-20">
          {/* ------------------------------------------------ copy */}
          <div className="lgl:col-span-7">
            <div className="mb-8 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-pulseDot rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
                In Saudi Arabia now — open to new roles
              </span>
            </div>

            <motion.div
              key={lens}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[11px] text-accent">{L.index}</span>
                <span className="font-mono text-[11px] text-faint">/</span>
                <span className="tag">{L.eyebrow}</span>
                <span className="h-px flex-1" style={{ background: "var(--hair)" }} />
              </div>

              <h1 className="font-display text-[clamp(2.7rem,7.4vw,5.3rem)] font-semibold leading-[0.93] tracking-tighter2 text-balance">
                <span className="block">{L.headline[0]}</span>
                <span className="block text-accent">{L.headline[1]}</span>
              </h1>

              <p className="mt-6 max-w-[42ch] font-display text-[clamp(1.05rem,2.1vw,1.38rem)] font-medium leading-snug tracking-tight">
                {L.sub}
              </p>

              <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.75] text-muted text-pretty">
                {L.blurb}
              </p>
            </motion.div>

            {/* actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="work"
                smooth
                offset={-70}
                duration={600}
                className="group flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--accent)", color: "var(--on-accent)" }}
              >
                See the work
                <FiArrowDown className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>

              <a
                href={`${process.env.PUBLIC_URL}/Muntazer-Mehdi-CV.pdf`}
                className="group flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium text-ink transition-colors duration-200 hover:text-accent"
                style={{ border: "1px solid var(--hair-hard)" }}
              >
                Download CV
                <FiDownload className="text-muted transition-colors group-hover:text-accent" />
              </a>

              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: SOCIALS.github, icon: <FaGithub />, label: "GitHub" },
                  { href: SOCIALS.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------ portrait */}
          <div className="lgl:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px] sml:max-w-[420px] lgl:ml-auto lgl:mr-0 lgl:max-w-[440px]">
              <Portrait variant={PORTRAIT_VARIANT} lens={L} />

              {/* handwriting, tilted, sitting half outside the frame */}
              <div className="absolute -bottom-9 -left-4 flex items-end gap-1.5 lgl:-left-16">
                <svg
                  width="34"
                  height="26"
                  viewBox="0 0 34 26"
                  fill="none"
                  aria-hidden="true"
                  className="mb-1"
                >
                  <path
                    d="M1 24C6 12 14 3 31 3"
                    stroke="var(--accent)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 2.5L31.5 3L29 10"
                    stroke="var(--accent)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="-rotate-3 font-hand text-[21px] leading-none text-accent">
                  not a stock photo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ ledger */}
        <dl className="ledger grid grid-cols-2 mdl:grid-cols-4" style={{ borderTop: "1px solid var(--hair)" }}>
          {LEDGER.map(({ k, v }) => (
            <div key={k} className="py-5 pr-6">
              <dt className="tag mb-1.5">{k}</dt>
              <dd className="text-[13.5px] leading-snug text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        {/* ------------------------------------------------ stack rail */}
        <motion.div
          key={`stack-${lens}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease }}
          className="scrollbar-hide flex items-center gap-5 overflow-x-auto py-4"
          style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}
        >
          <span className="tag shrink-0">Stack</span>
          {L.stack.map((s) => (
            <span
              key={s}
              className="shrink-0 whitespace-nowrap font-mono text-[11.5px] tracking-tight text-muted"
            >
              {s}
            </span>
          ))}
          <span className="ml-auto hidden shrink-0 items-center gap-1.5 text-[11.5px] text-accent lg:flex">
            {L.proof}
            <FiArrowUpRight />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
