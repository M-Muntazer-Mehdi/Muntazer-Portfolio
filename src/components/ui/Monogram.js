import React from "react";

import markPortrait from "../../assets/images/mark-portrait.png";

/* The brand mark.
   ------------------------------------------------------------------
   Two overlapping M strokes; the second carries the lens accent, so the
   mark repaints with the rest of the page.

   When the boot sequence has no on-screen hero portrait to land on — a
   phone, where it sits below the fold — the portrait collapses into
   this mark instead and then stays: <html data-mark-portrait> swaps the
   strokes for the face inside the same frame. The swap is CSS so the
   element the flight measured never remounts underneath it.

   Both children are always rendered, so the frame keeps its size and
   the layout cannot shift when the swap happens. */
const Monogram = ({ size = 34 }) => (
  <span
    className="mm-mark relative shrink-0"
    style={{ width: size, height: size }}
    role="img"
    aria-label="Muntazer Mehdi"
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      /* the boot sequence measures this when the hero portrait is off screen */
      data-monogram=""
      className="absolute inset-0"
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="8"
        stroke="var(--hair-hard)"
        strokeWidth="1.5"
      />
      <g className="mm-mark-strokes">
        <path
          d="M7 22.5V10.5L11.4 16.8L15.8 10.5V22.5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.2 22.5V10.5L20.6 16.8L25 10.5V22.5"
          stroke="var(--accent)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>

    <img
      src={markPortrait}
      alt=""
      aria-hidden="true"
      className="mm-mark-face absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-[6.5px] object-cover object-top"
    />
  </span>
);

export default Monogram;
