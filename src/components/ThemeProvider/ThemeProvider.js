"use client";
import { createContext, useContext, useEffect, useState } from "react";

/**
 * The list of available themes. Each name must have a matching
 * `[data-theme="<name>"]` block in src/app/globals.css.
 * Add a new theme by appending its name here.
 */
export const THEMES = ["kleon", "loud-house", "daily-dutt", "blueprint", "comic"];
const DEFAULT_THEME = "kleon";
const STORAGE_KEY = "theme";

const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  themes: THEMES,
  setTheme: () => {},
  cycleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  // Restore the saved theme on mount (client-only).
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES.includes(saved)) {
      setTheme(saved);
    }
  }, []);

  // Apply the theme to <html> and persist it whenever it changes.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Advance to the next theme in the list (wraps around).
  const cycleTheme = () => {
    setTheme((current) => {
      const next = (THEMES.indexOf(current) + 1) % THEMES.length;
      return THEMES[next];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themes: THEMES, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
