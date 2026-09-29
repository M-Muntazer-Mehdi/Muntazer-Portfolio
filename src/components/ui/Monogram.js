import React from "react";

/* Two overlapping M strokes. The second one carries the lens accent,
   so the mark repaints with the rest of the page. */
const Monogram = ({ size = 34 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    /* the boot sequence measures this when the hero portrait is off screen */
    data-monogram=""
    role="img"
    aria-label="Muntazer Mehdi"
    className="shrink-0"
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
  </svg>
);

export default Monogram;
