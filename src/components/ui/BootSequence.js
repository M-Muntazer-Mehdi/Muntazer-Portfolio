import React, { useEffect, useRef, useState } from "react";

import { bootWillRun } from "../../lib/boot";
import { PROOFS } from "../../assets/proofs";
import cutoutSrc from "../../assets/images/figure.png";

/* The boot sequence: a contact sheet developing.
   ------------------------------------------------------------------
   The page opens as what the rest of it is designed to look like — a
   contact sheet. Thirteen proofs expose in reading order, the sheet
   clears, and the portrait rises and flies to the exact position it
   occupies in the hero, where the real element takes over.

   Cost was the whole question here. Loading thirteen full covers before
   first paint is 1.9 MB spent on a recruiter's first second, so the
   sheet uses 256px proofs instead: 91 KB for the set, and a proof print
   is what belongs on a contact sheet anyway.

   Two things it must never do:

     · wait on an image. The timeline is fixed and the frames are drawn
       as empty plates from the first frame; a proof appears when it has
       decoded, and a slow one simply leaves its plate empty.
     · block the document. The page is mounted underneath the whole
       time, so a crawler and a screen reader read the page, not this.

   The flight is a FLIP against a measured destination rather than a
   hard-coded one, which keeps it correct at any breakpoint or zoom.
   Plain DOM and CSS transitions throughout: framer-motion's exit and
   layout animations are the two things in this codebase that have
   already failed, and a sequence that cannot leave is worse than none. */

/* Timeline. The portrait must not arrive while the sheet is still on
   screen — at full size it covers the middle three frames — so it only
   emerges once clearing is under way. Keyframe delays in index.css are
   tuned against these numbers; move one and check the other. */
const EXPOSE = 34; // between proofs, in reading order
const SHEET_HOLD = 780; // sheet complete before it starts clearing
const CLEAR = 18; // between proofs on the way out
const LIFT = 1300; // portrait begins its flight
const FLIGHT = 740; // must match the transition below
const DONE = LIFT + FLIGHT;

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
  const [phase, setPhase] = useState("expose"); // expose → clear → fly
  const imgRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    const root = document.documentElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    /* holds the real portrait back until this one lands on top of it */
    root.setAttribute("data-booting", "");

    const clear = setTimeout(() => setPhase("clear"), SHEET_HOLD);

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
      }
      setPhase("fly");
    }, LIFT);

    const end = setTimeout(() => {
      root.removeAttribute("data-booting");
      setActive(false);
    }, DONE);

    return () => {
      [clear, fly, end].forEach(clearTimeout);
      root.removeAttribute("data-booting");
      document.body.style.overflow = overflow;
    };
  }, [active]);

  if (!active) return null;

  const clearing = phase !== "expose";
  const flying = phase === "fly";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden"
      style={{
        /* the ground lifts before the portrait lands, so the flight
           finishes over the real page rather than over a blank sheet */
        background: "var(--paper)",
        opacity: flying ? 0 : 1,
        transition: `opacity ${Math.round(FLIGHT * 0.5)}ms ease`,
      }}
    >
      <Registration className="left-7 top-7" delay={40} gone={clearing} />
      <Registration className="right-7 top-7" delay={100} gone={clearing} />
      <Registration className="bottom-7 left-7" delay={160} gone={clearing} />
      <Registration className="bottom-7 right-7" delay={220} gone={clearing} />

      {/* the sheet */}
      <div className="flex max-w-[min(92vw,1080px)] flex-wrap items-start justify-center gap-x-4 gap-y-5">
        {PROOFS.map((src, i) => (
          <div
            key={i}
            className="mm-proof"
            style={{
              width: "min(19vw, 168px)",
              /* exposing runs forwards, clearing runs backwards, so the
                 sheet unmakes itself in the order it was made */
              "--in": `${i * EXPOSE}ms`,
              "--out": `${(PROOFS.length - 1 - i) * CLEAR}ms`,
              opacity: clearing ? 0 : undefined,
              transform: clearing ? "translateY(14px)" : undefined,
              transition: clearing
                ? `opacity 260ms ease var(--out), transform 260ms ease var(--out)`
                : undefined,
            }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "16 / 10", border: "1px solid var(--hair-hard)" }}
            >
              <img
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <span className="mt-1.5 block font-mono text-[10.5px] tracking-[0.18em] text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
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
          /* larger than its destination, so the flight carries a real
             scale change rather than a flat slide */
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
