/* Shared boot state.
   ------------------------------------------------------------------
   Two components need the same answer to "is the overlay playing right
   now?" — BootSequence, which plays it, and Hero, which waits for it
   before performing. Keeping the decision in one place stops the two
   from disagreeing.

   Read during render, never in an effect: both components render in the
   same pass, before BootSequence has marked the session, so they see
   the same value. */

/* When the overlay's ground has lifted far enough for the hero beneath to
   be worth watching. Shorter than the full sequence on purpose: the
   portrait is still in flight while the text below it arrives. */
export const HERO_DELAY_MS = 1050;

export const prefersStill = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

/* A background tab suspends requestAnimationFrame and throttles timers, so
   the sequence would freeze mid-draw and greet the visitor with a blank
   sheet when they switched to it. */
const documentHidden = () => {
  try {
    return document.visibilityState === "hidden";
  } catch {
    return false;
  }
};

/* The single answer both components rely on. Adding a condition here and
   not there is how the hero ends up waiting for an overlay that never
   plays, so every condition lives in this one function. */
/* Runs on every load rather than once per session. It earns that by
   being short and by ending in a useful place: the portrait is put where
   it belongs instead of a splash being taken away. */
export const bootWillRun = () => !prefersStill() && !documentHidden();
