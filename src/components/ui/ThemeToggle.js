import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useApp } from "../../context/AppContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useApp();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light" : "Dark"}
      className="relative grid h-11 w-11 place-items-center rounded-full text-muted transition-colors duration-200 hover:text-accent"
      style={{ border: "1px solid var(--hair)" }}
    >
      <FiSun
        className={`absolute text-[15px] transition-all duration-300 ${
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      />
      <FiMoon
        className={`absolute text-[15px] transition-all duration-300 ${
          dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
