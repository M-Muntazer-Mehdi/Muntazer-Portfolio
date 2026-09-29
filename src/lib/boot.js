/* Shared boot state.
   ------------------------------------------------------------------
   Two components need the same answer to "is the overlay playing right
   now?" — BootSequence, which plays it, and Hero, which waits for it
   before performing. Keeping the decision in one place stops the two
   from disagreeing.

   Read during render, never in an effect: both components render in the
   same pass, before BootSequence has marked the session, so they see
   the same value. */

export const BOOT_MS = 1770; // HOLD + WIPE in BootSequence
export const SEEN_KEY = "mm.booted";

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
export const bootWillRun = () => {
  if (prefersStill() || documentHidden()) return false;
  try {
    return sessionStorage.getItem(SEEN_KEY) !== "1";
  } catch {
    /* privacy modes throw on read; treat as a first visit */
    return true;
  }
};
