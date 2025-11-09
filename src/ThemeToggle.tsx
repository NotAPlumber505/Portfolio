import React from "react";
import { useTheme } from "./context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 rounded text-sm border border-[var(--border)] bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--fg)]"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}