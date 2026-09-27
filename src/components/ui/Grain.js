import React from "react";

/* A single static noise layer over the whole page.
   This is the thing that stops flat vector colour reading as machine-made —
   opacity comes from --grain so dark mode gets a little more of it. */
const Grain = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-[90] mix-blend-overlay"
    style={{ opacity: "var(--grain)" }}
  >
    <svg className="h-full w-full">
      <filter id="mm-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#mm-grain)" />
    </svg>
  </div>
);

export default Grain;
