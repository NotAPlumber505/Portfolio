import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") return stored;
    // Default to dark mode
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}