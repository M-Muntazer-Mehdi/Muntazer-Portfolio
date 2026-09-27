import { useEffect, useRef } from "react";

/* Pointer-driven 3D tilt.
   Writes CSS custom properties straight onto the node instead of setting React
   state, so a pointer move never triggers a render. Eased in a rAF loop that
   parks itself once the card has settled.

   Disabled for coarse pointers and for anyone who asked for reduced motion —
   on those the card just sits flat, which is a perfectly good card. */
export default function useTilt({ max = 7, ease = 0.12 } = {}) {
  const sceneRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardRef.current;
    if (!scene || !card) return undefined;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return undefined;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const frame = () => {
      raf = 0;
      curX += (targetX - curX) * ease;
      curY += (targetY - curY) * ease;

      card.style.setProperty("--ry", `${curX.toFixed(3)}deg`);
      card.style.setProperty("--rx", `${curY.toFixed(3)}deg`);
      // -1..1, used to slide the sheen and offset the shadow
      card.style.setProperty("--px", (curX / max).toFixed(3));
      card.style.setProperty("--py", (curY / max).toFixed(3));

      if (Math.abs(targetX - curX) > 0.008 || Math.abs(targetY - curY) > 0.008) {
        raf = requestAnimationFrame(frame);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (event) => {
      const rect = scene.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * max * 2;
      targetY = -ny * max * 2;
      schedule();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max, ease]);

  return { sceneRef, cardRef };
}
