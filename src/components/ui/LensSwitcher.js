import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext";
import { LENSES, LENS_ORDER } from "../../data/lenses";

/* The switch that repaints the site.
   `group` keeps the sliding indicator unique when the switcher is rendered
   twice (desktop bar + mobile row). */
const LensSwitcher = ({ group = "desktop", className = "" }) => {
  const { lens, setLens } = useApp();

  return (
    <div
      role="tablist"
      aria-label="Choose a discipline"
      className={`flex items-center gap-0.5 rounded-full p-1 ${className}`}
      style={{ border: "1px solid var(--hair)", background: "var(--surface)" }}
    >
      {LENS_ORDER.map((id) => {
        const active = id === lens;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active}
            onClick={() => setLens(id)}
            className="relative isolate flex min-h-[44px] items-center rounded-full px-3.5 py-1.5 transition-colors duration-200 mdl:min-h-0 mdl:px-3.5 mdl:py-2"
          >
            {active && (
              <motion.span
                layoutId={`lens-pill-${group}`}
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent)",
                }}
                transition={{ type: "spring", stiffness: 430, damping: 36 }}
              />
            )}
            <span
              className={`whitespace-nowrap font-mono text-[12.5px] uppercase tracking-[0.14em] ${
                active ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              <span className="mr-1.5 hidden opacity-50 sml:inline">{LENSES[id].index}</span>
              {LENSES[id].tab}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default LensSwitcher;
