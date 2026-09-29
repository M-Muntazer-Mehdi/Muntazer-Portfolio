import React from "react";

import useTilt from "../../hooks/useTilt";
import cutoutSrc from "../../assets/images/figure.png";

/* Confirmed by Muntazer 2026-09-23: he is already in Saudi Arabia, in Madinah.
   Nothing here changes unless he says so. */
const PLACE = "Madinah, Saudi Arabia";
const TZ = "UTC+3";

const capClass = "font-mono text-[12.5px] uppercase tracking-[0.16em]";

const scene = { perspective: "1250px" };
const card = {
  transformStyle: "preserve-3d",
  transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
  willChange: "transform",
};
const at = (z, extra = "") => ({
  transform: `translateZ(${z}px) ${extra}`.trim(),
  transformStyle: "preserve-3d",
});

const Chip = ({ children, className = "", z = 62 }) => (
  <div
    className={`absolute ${className}`}
    style={{
      ...at(z),
      background: "var(--raised)",
      border: "1px solid var(--hair-hard)",
      boxShadow: "var(--plate)",
    }}
  >
    <span className={`${capClass} block px-2.5 py-1.5 text-muted`}>{children}</span>
  </div>
);


/* The plate the figure stands on.
   An asymmetric chamfer — cut at top-left and bottom-right only — with a
   measurement rail down one side and heavy brackets on the opposite corners.
   Drawn as SVG so every hairline stays exactly 1px however the plate scales. */
const VB = { w: 360, h: 400 };

const OUTER = "M30 5 L355 5 L355 369 L330 395 L5 395 L5 31 Z";
const INNER = "M38 14 L346 14 L346 365 L326 386 L14 386 L14 39 Z";

const FramePlate = ({ z, opacity = 1, filled = false }) => (
  <svg
    aria-hidden="true"
    viewBox={`0 0 ${VB.w} ${VB.h}`}
    className="absolute inset-0 h-full w-full"
    style={{ ...at(z), opacity, overflow: "visible" }}
  >
    <path
      d={OUTER}
      fill={filled ? "var(--accent-soft)" : "none"}
      stroke={filled ? "var(--accent)" : "var(--hair)"}
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
    {filled && (
      <>
        <path
          d={INNER}
          fill="none"
          stroke="var(--hair)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* measurement rail */}
        <line x1="24" y1="58" x2="24" y2="336" stroke="var(--hair-hard)" strokeWidth="1"
              vectorEffect="non-scaling-stroke" />
        {Array.from({ length: 9 }, (_, i) => 58 + i * 34.75).map((y, i) => (
          <line
            key={y}
            x1="24"
            y1={y}
            x2={i % 2 === 0 ? 36 : 30}
            y2={y}
            stroke={i % 2 === 0 ? "var(--accent)" : "var(--hair-hard)"}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* heavy brackets, on the two corners the chamfer left square */}
        <path d="M300 5 L355 5 L355 60" fill="none" stroke="var(--accent)" strokeWidth="2.5"
              vectorEffect="non-scaling-stroke" strokeLinecap="square" />
        <path d="M60 395 L5 395 L5 340" fill="none" stroke="var(--accent)" strokeWidth="2.5"
              vectorEffect="non-scaling-stroke" strokeLinecap="square" />

        {/* plinth the figure stands on */}
        <line x1="46" y1="365" x2="316" y2="365" stroke="var(--hair-hard)" strokeWidth="1"
              vectorEffect="non-scaling-stroke" />
        <line x1="46" y1="359" x2="46" y2="371" stroke="var(--accent)" strokeWidth="1"
              vectorEffect="non-scaling-stroke" />
        <line x1="316" y1="359" x2="316" y2="371" stroke="var(--accent)" strokeWidth="1"
              vectorEffect="non-scaling-stroke" />
      </>
    )}
  </svg>
);

/* ---------------------------------------------------------------- cutout
   bannerImg.png has a transparent background, so instead of a frame the
   figure is pushed forward out of the arch. The parallax on pointer move is
   the whole point of this variant. */
const Cutout = ({ lens }) => {
  const { sceneRef, cardRef } = useTilt({ max: 5 });

  return (
    <div ref={sceneRef} className="relative mx-auto w-full max-w-[440px]" style={scene}>
      <div ref={cardRef} className="relative" style={card}>
        <div
          className="relative"
          style={{ aspectRatio: `${VB.w} / ${VB.h}`, transformStyle: "preserve-3d" }}
        >
          <FramePlate z={-104} opacity={0.24} />
          <FramePlate z={-58} opacity={0.42} />
          <FramePlate z={-18} filled />

          <img
            src={cutoutSrc}
            alt="Muntazer Mehdi"
            width={447}
            height={418}
            className="absolute bottom-[7.2%] left-1/2 w-[97%]"
            style={{
              transform: "translateX(-50%) translateZ(38px)",
              transformStyle: "preserve-3d",
              // the cut-out ends in a hard horizontal edge at chest level;
              // dissolve it into the plinth instead of letting it just stop
              maskImage: "linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.45) 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.45) 92%, transparent 100%)",
              filter:
                "saturate(0.92) contrast(1.04) drop-shadow(calc(var(--px, 0) * -16px) 26px 30px rgba(0,0,0,0.42))",
            }}
          />

          <Chip className="-left-9 top-[64%] hidden lgl:block" z={58}>
            {lens.label}
          </Chip>
        </div>

        <figcaption
          className="relative flex items-end justify-between pt-3.5"
          style={{ ...at(12), borderTop: "1px solid var(--hair)" }}
        >
          <span className={`${capClass} leading-relaxed text-muted`}>
            {PLACE}
            <br />
            {TZ}
          </span>
          <span className={`${capClass} text-muted`}>
            {lens.index} / {lens.tab}
          </span>
        </figcaption>
      </div>
    </div>
  );
};

const Portrait = ({ lens }) => <Cutout lens={lens} />;

export default Portrait;
