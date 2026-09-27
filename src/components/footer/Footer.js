import React from "react";
import { FiArrowUp } from "react-icons/fi";

import { SOCIALS } from "../../data/lenses";

const YEAR = new Date().getFullYear();

/* Closes the page. A ledger line, not a sitemap — everything worth linking to
   is already above. */
const Footer = () => (
  <footer className="relative" style={{ borderTop: "1px solid var(--hair)" }}>
    <div className="mx-auto max-w-screen-xl px-5 lgl:px-8">
      <div className="flex flex-col gap-6 py-8 mdl:flex-row mdl:items-center mdl:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-[15px] font-semibold tracking-tight">Muntazer Mehdi</p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
            Senior Full-Stack Engineer · Madinah, Saudi Arabia
          </p>
        </div>

        <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            ["Email", SOCIALS.email],
            ["GitHub", SOCIALS.github],
            ["LinkedIn", SOCIALS.linkedin],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}

          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            Top
            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-px" />
          </a>
        </nav>
      </div>

      <div
        className="flex flex-col gap-1.5 py-6 mdl:flex-row mdl:items-center mdl:justify-between"
        style={{ borderTop: "1px solid var(--hair)" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
          © {YEAR} Muntazer Mehdi
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint">
          Every date and figure on this page is backed by a signed letter or by source
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
