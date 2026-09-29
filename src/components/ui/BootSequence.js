import React, { useEffect, useRef, useState } from "react";

import { bootWillRun } from "../../lib/boot";
import cutoutSrc from "../../assets/images/figure.png";

/* The boot sequence.
   ------------------------------------------------------------------
   Not a splash screen in front of the page: the page assembling. The
   portrait is presented centre-stage inside registration marks, then
   flies to the exact spot it occupies in the hero and hands over to the
   real element.

   The flight is a FLIP — measure where the hero portrait actually is,
   work out the delta from where this one is, animate the difference.
   Measuring the real element instead of hard-coding a destination is
   what keeps it correct at every breakpoint and every zoom level.

   Deliberately plain DOM and CSS transitions. framer-motion's exit and
   layout animations are the two things in this codebase that have
   already failed once, and a sequence that cannot leave is worse than
   no sequence at all. */

const PRESENT = 900; // centre-stage before the flight begins
const FLIGHT = 760; // must match the transition duration below
const TICKS = 28;

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
      transition: `opacity 300ms ease ${gone ? 0 : delay}ms`,
    }}
  >
    <path d="M13 0v9M13 17v9M0 13h9M17 13h9" stroke="var(--hair-hard)" strokeWidth="1" />
    <circle cx="13" cy="13" r="4.2" stroke="var(--accent)" strokeWidth="1" />
  </svg>
);

const BootSequence = () => {
  const [active, setActive] = useState(bootWillRun);
  const [flying, setFlying] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    const root = document.documentElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    /* holds the real portrait back until this one lands on top of it */
    root.setAttribute("data-booting", "");

    const start = setTimeout(() => {
      const img = imgRef.current;
      const target = document.querySelector("[data-hero-portrait]");
      const from = img && img.getBoundingClientRect();
      const to = target && target.getBoundingClientRect();

      /* Fly only when the destination is on screen. On a narrow layout the
         hero portrait sits below the text and below the fold, so flying to
         it would carry the image off the bottom of the screen and read as
         falling away rather than landing. Fade out in place instead. */
      const landable =
        to && to.width > 8 && to.top < window.innerHeight - 40 && to.bottom > 40;

      if (img && from && landable && from.width > 8) {
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);
        const scale = to.width / from.width;
        img.style.transition = `transform ${FLIGHT}ms cubic-bezier(0.62, 0.02, 0.24, 1)`;
        img.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
      }
      setFlying(true);
    }, PRESENT);

    const end = setTimeout(() => {
      root.removeAttribute("data-booting");
      setActive(false);
    }, PRESENT + FLIGHT);

    return () => {
      clearTimeout(start);
      clearTimeout(end);
      root.removeAttribute("data-booting");
      document.body.style.overflow = overflow;
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[120] overflow-hidden"
      style={{
        /* the ground lifts first, so the portrait finishes its flight over
           the real page rather than over a blank sheet */
        background: "var(--paper)",
        opacity: flying ? 0 : 1,
        transition: `opacity ${Math.round(FLIGHT * 0.55)}ms ease`,
      }}
    >
      <Registration className="left-7 top-7" delay={40} gone={flying} />
      <Registration className="right-7 top-7" delay={100} gone={flying} />
      <Registration className="bottom-7 left-7" delay={160} gone={flying} />
      <Registration className="bottom-7 right-7" delay={220} gone={flying} />

      {/* measurement rail, filling tick by tick */}
      <div
        className="absolute bottom-[11vh] left-1/2 flex -translate-x-1/2 items-end gap-[3px]"
        style={{
          height: 14,
          opacity: flying ? 0 : 1,
          transition: "opacity 240ms ease",
        }}
      >
        {Array.from({ length: TICKS }).map((_, i) => (
          <span
            key={i}
            className="mm-tick w-px"
            style={{
              height: i % 7 === 0 ? 14 : 8,
              background: i % 7 === 0 ? "var(--accent)" : "var(--hair-hard)",
              "--draw-delay": `${100 + i * 18}ms`,
            }}
          />
        ))}
      </div>

      <img
        ref={imgRef}
        src={cutoutSrc}
        alt=""
        width={447}
        height={418}
        className="mm-boot-portrait absolute left-1/2 top-1/2"
        style={{
          /* deliberately larger than its destination, so the flight
             carries a real scale change rather than a flat slide */
          height: "min(62vh, 560px)",
          width: "auto",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center",
          filter: "saturate(0.92) contrast(1.04)",
          maskImage:
            "linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.45) 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.45) 92%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default BootSequence;
