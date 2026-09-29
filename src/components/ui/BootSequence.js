import React, { useEffect, useRef, useState } from "react";

import { useApp } from "../../context/AppContext";
import { bootWillRun } from "../../lib/boot";
import { LENSES, LENS_ORDER } from "../../data/lenses";
import cutoutSrc from "../../assets/images/figure.png";

/* The boot sequence: choosing a lens, then pulling focus.
   ------------------------------------------------------------------
   One continuous idea rather than a run of separate beats. The portrait
   opens soft and colourless, as if the shot has not been focused yet.
   The measurement rail below it is the focus scale: a marker travels it
   while the four lens names step past, and as the marker settles the
   image racks into focus and its colour returns. Then the ground lifts
   and the portrait flies to the position it occupies in the hero, where
   the real element takes over.

   It uses the two things that are actually particular to this site —
   the lens system and the measurement rail — so it could not be lifted
   onto anyone else's page.

   No images beyond the portrait, which the hero needs anyway: nothing
   is fetched for the sake of the sequence.

   The flight is a FLIP against a measured destination rather than a
   hard-coded one, which keeps it correct at any breakpoint or zoom.
   Plain DOM and CSS transitions throughout: framer-motion's exit and
   layout animations are the two things in this codebase that have
   already failed, and a sequence that cannot leave is worse than none. */

const STEP = 200; // per lens name
const RACK = LENS_ORDER.length * STEP; // focus is pulled across the whole sweep
const LIFT = RACK + 260; // settle, then fly
const FLIGHT = 720; // must match the transition below
/* Fallback only. The handover normally runs off the flight's own
   transitionend, which is frame-accurate; a timer cannot be, and
   uncovering the real portrait even one frame after the overlay goes
   leaves nothing drawn in its place, which reads as the hero image
   arriving a beat behind everything else. */
const HANDOVER = LIFT + FLIGHT - 40;
const DONE = LIFT + FLIGHT;
const TICKS = 32;

/* Registration crosshair: the mark a printer lines plates up against. */
const Registration = ({ className, delay, gone }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    className={`absolute ${className}`}
    style={{
      opacity: gone ? 0 : 1,
      transition: `opacity 280ms ease ${gone ? 0 : delay}ms`,
    }}
  >
    <path d="M13 0v9M13 17v9M0 13h9M17 13h9" stroke="var(--hair-hard)" strokeWidth="1" />
    <circle cx="13" cy="13" r="4.2" stroke="var(--accent)" strokeWidth="1" />
  </svg>
);

const BootSequence = () => {
  const { lens: current } = useApp();
  /* The sweep has to finish on the lens the page is actually about to
     show, or the sequence promises one thing and reveals another. Fixed
     at mount so a lens change mid-flight cannot reorder it. */
  const [order] = useState(() => {
    /* LENSES is keyed by id, so the running order comes from LENS_ORDER */
    const landing = LENS_ORDER.includes(current) ? current : LENS_ORDER[0];
    return [...LENS_ORDER.filter((id) => id !== landing), landing];
  });
  const [active, setActive] = useState(bootWillRun);
  const [step, setStep] = useState(0);
  const [flying, setFlying] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    const root = document.documentElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    /* holds the real portrait back until this one lands on top of it */
    root.setAttribute("data-booting", "");

    /* the sweep: one lens name per STEP, ending on the last */
    const sweep = order.map((_, i) => setTimeout(() => setStep(i), i * STEP));

    const fly = setTimeout(() => {
      const img = imgRef.current;
      const target = document.querySelector("[data-hero-portrait]");
      const from = img && img.getBoundingClientRect();
      const to = target && target.getBoundingClientRect();

      /* Fly only to a destination that is on screen. On a narrow layout
         the hero portrait sits below the fold, and flying there would
         carry the image off the bottom and read as falling away. */
      const landable =
        to && to.width > 8 && to.top < window.innerHeight - 40 && to.bottom > 40;

      if (img && from && from.width > 8 && landable) {
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);
        const scale = to.width / from.width;
        img.style.transition = `transform ${FLIGHT}ms cubic-bezier(0.62, 0.02, 0.24, 1)`;
        img.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
        /* the exact frame the copy comes to rest on the real one */
        img.addEventListener(
          "transitionend",
          (e) => {
            if (e.propertyName === "transform") root.removeAttribute("data-booting");
          },
          { once: true }
        );
      }
      setFlying(true);
    }, LIFT);

    const handover = setTimeout(() => root.removeAttribute("data-booting"), HANDOVER);
    const end = setTimeout(() => setActive(false), DONE);

    return () => {
      [...sweep, fly, handover, end].forEach(clearTimeout);
      root.removeAttribute("data-booting");
      document.body.style.overflow = overflow;
    };
  }, [active, order]);

  if (!active) return null;

  const lens = LENSES[order[step]];
  /* how far along the focus pull we are, 0 to 1 */
  const progress = order.length > 1 ? step / (order.length - 1) : 1;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden"
      style={{
        /* the ground lifts before the portrait lands, so the flight
           finishes over the real page rather than over a blank sheet */
        background: "var(--paper)",
        opacity: flying ? 0 : 1,
        transition: `opacity ${Math.round(FLIGHT * 0.5)}ms ease`,
      }}
    >
      <Registration className="left-7 top-7" delay={40} gone={flying} />
      <Registration className="right-7 top-7" delay={90} gone={flying} />
      <Registration className="bottom-7 left-7" delay={140} gone={flying} />
      <Registration className="bottom-7 right-7" delay={190} gone={flying} />

      <img
        ref={imgRef}
        src={cutoutSrc}
        alt=""
        width={447}
        height={418}
        className="mm-boot-portrait absolute left-1/2 top-1/2"
        style={{
          /* larger than its destination, so the flight carries a real
             scale change rather than a flat slide */
          height: "min(58vh, 520px)",
          width: "auto",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center",
          /* the rack: soft and colourless, resolving as the sweep runs */
          filter: `saturate(${(0.08 + progress * 0.84).toFixed(2)}) contrast(1.04) blur(${((1 - progress) * 13).toFixed(1)}px)`,
          transition: `filter ${STEP}ms linear`,
          maskImage:
            "linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.45) 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.45) 92%, transparent 100%)",
        }}
      />

      {/* the focus scale, and the lens being selected on it */}
      <div
        className="absolute bottom-[13vh] left-1/2 w-[min(78vw,520px)] -translate-x-1/2"
        style={{ opacity: flying ? 0 : 1, transition: "opacity 240ms ease" }}
      >
        <div className="mb-3 flex items-baseline justify-between">
          <span className="font-mono text-[12px] tracking-[0.2em] text-accent">
            {lens.index}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-ink">
            {lens.tab}
          </span>
          <span className="font-mono text-[12px] tracking-[0.2em] text-faint">
            {String(Math.round(progress * 100)).padStart(3, "0")}
          </span>
        </div>

        <div className="relative flex items-end justify-between" style={{ height: 14 }}>
          {Array.from({ length: TICKS }).map((_, i) => (
            <span
              key={i}
              className="w-px"
              style={{
                height: i % 8 === 0 ? 14 : 7,
                background:
                  i / (TICKS - 1) <= progress ? "var(--accent)" : "var(--hair-hard)",
                transition: "background-color 160ms linear",
              }}
            />
          ))}
          {/* the marker travelling the scale */}
          <span
            className="absolute bottom-[-5px] h-[22px] w-px"
            style={{
              left: `${progress * 100}%`,
              background: "var(--ink)",
              transition: `left ${STEP}ms cubic-bezier(0.62, 0.02, 0.24, 1)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
