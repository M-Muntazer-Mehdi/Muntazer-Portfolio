import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const AppContext = createContext(null);

const THEME_KEY = "mm.theme";
const LENS_KEY = "mm.lens";

/* localStorage throws in some privacy modes, so every access is guarded. */
const read = (key, fallback) => {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* non-fatal */
  }
};

const systemTheme = () => {
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch {
    return "dark";
  }
};

export function AppProvider({ children }) {
  // the inline script in index.html has already stamped <html> before paint;
  // read back from it so the first render agrees with what is on screen
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || read(THEME_KEY, systemTheme())
  );
  const [lens, setLens] = useState(() => read(LENS_KEY, "fullstack"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    // the pre-paint script parked a literal colour on <html>; the stylesheet
    // owns it from here, otherwise it shows through on overscroll
    document.documentElement.style.background = "";
    write(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.lens = lens;
    write(LENS_KEY, lens);
  }, [lens]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return (
    <AppContext.Provider value={{ theme, setTheme, toggleTheme, lens, setLens }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}
