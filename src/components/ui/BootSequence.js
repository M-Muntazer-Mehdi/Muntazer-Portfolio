import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SEEN_KEY, bootWillRun } from "../../lib/boot";

/* The boot sequence.
   ------------------------------------------------------------------
   Built from the same parts as the rest of the page — registration
   crosshairs, a 28-tick measurement rail, the monogram — so it reads as
   the site assembling itself rather than a spinner borrowed from
   somewhere else.

   Three rules it has to obey:

     · it shows once per session, not on every reload, or it becomes a
       toll booth on the person's own site
     · prefers-reduced-motion skips it entirely, including the mount
     · the page renders underneath the whole time, so a crawler and a
       screen reader see the document, not the overlay

   The exit is a CSS transition on a plain div rather than an
   AnimatePresence exit: framer-motion 8.4.2 does not reliably resolve
   those here, and a loader that fails to leave is worse than no loader. */

const ease = [0.22, 0.61, 0.36, 1];
const TICKS = 28;
const HOLD = 1150; // draw time before the wipe starts
const WIPE = 620; // must match the transition duration below

const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* privacy modes throw; the sequence simply runs again next visit */
  }
};

/* A registration mark: the crosshair a printer lines plates up against. */
const Registration = ({ className, delay }) => (
  <motion.svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    className={`absolute ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.28, delay, ease }}
  >
    <path d="M13 0v9M13 17v9M0 13h9M17 13h9" stroke="var(--hair-hard)" strokeWidth="1" />
    <circle cx="13" cy="13" r="4.2" stroke="var(--accent)" strokeWidth="1" />
  </motion.svg>
);

const BootSequence = () => {
  /* Decided once, before first paint, so the overlay never flashes for
     someone who should not see it at all. */
  const [active, setActive] = useState(bootWillRun);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!active) return undefined;

    markSeen();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const out = setTimeout(() => setLeaving(true), HOLD);
    const gone = setTimeout(() => setActive(false), HOLD + WIPE);

    return () => {
      clearTimeout(out);
      clearTimeout(gone);
      document.body.style.overflow = overflow;
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[120] flex items-center justify-center"
      style={{
        background: "var(--paper)",
        transform: leaving ? "translateY(-101%)" : "translateY(0)",
        transition: `transform ${WIPE}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <Registration className="left-7 top-7" delay={0.05} />
      <Registration className="right-7 top-7" delay={0.11} />
      <Registration className="bottom-7 left-7" delay={0.17} />
      <Registration className="bottom-7 right-7" delay={0.23} />

      <div className="flex flex-col items-center gap-7">
        {/* the monogram, written rather than revealed */}
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect
            x="0.75"
            y="0.75"
            width="30.5"
            height="30.5"
            rx="8"
            pathLength="1"
            stroke="var(--hair-hard)"
            strokeWidth="1.5"
            className="mm-draw"
            style={{ "--draw": "0.72s", "--draw-delay": "0.08s" }}
          />
          <path
            d="M7 22.5V10.5L11.4 16.8L15.8 10.5V22.5"
            pathLength="1"
            stroke="var(--ink)"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mm-draw"
            style={{ "--draw": "0.5s", "--draw-delay": "0.3s" }}
          />
          <path
            d="M16.2 22.5V10.5L20.6 16.8L25 10.5V22.5"
            pathLength="1"
            stroke="var(--accent)"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mm-draw"
            style={{ "--draw": "0.5s", "--draw-delay": "0.46s" }}
          />
        </svg>

        {/* the measurement rail, filling tick by tick */}
        <div className="flex items-end gap-[3px]" style={{ height: 14 }}>
          {Array.from({ length: TICKS }).map((_, i) => (
            <motion.span
              key={i}
              className="w-px"
              style={{
                height: i % 7 === 0 ? 14 : 8,
                background: i % 7 === 0 ? "var(--accent)" : "var(--hair-hard)",
                transformOrigin: "bottom",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.18 + i * 0.022, ease }}
            />
          ))}
        </div>

        <motion.p
          className="font-mono text-[11.5px] uppercase tracking-[0.34em] text-faint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease }}
        >
          Muntazer Mehdi
        </motion.p>
      </div>
    </div>
  );
};

export default BootSequence;
