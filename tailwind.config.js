/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Instrument Sans", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
        hand: ["Caveat", "cursive"],
        // legacy template aliases, still referenced by the old sections
        bodyFont: ['"Instrument Sans"', "sans-serif"],
        titleFont: ['"Bricolage Grotesque"', "sans-serif"],
      },
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        raised: "var(--raised)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        hair: "var(--hair)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "on-accent": "var(--on-accent)",
        // legacy template colours
        bodyColor: "#212428",
        lightText: "#c4cfde",
        designColor: "#ff014f",
      },
      borderColor: {
        DEFAULT: "var(--hair)",
        hard: "var(--hair-hard)",
      },
      boxShadow: {
        plate: "var(--plate)",
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      letterSpacing: {
        tighter2: "-0.035em",
      },
      keyframes: {
        rise: {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.25" },
        },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.22,.61,.36,1) both",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
