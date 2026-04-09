"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="relative w-10 h-10 rounded-full border border-background-300 bg-background-200 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <span className="w-5 h-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative w-10 h-10 rounded-full
        border border-background-300
        bg-background-200
        flex items-center justify-center
        overflow-hidden
        cursor-pointer
        hover:border-accent-100
        hover:shadow-[0_0_12px_rgba(83,109,254,0.4)]
        transition-all duration-300 ease-in-out
        group
      "
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      id="theme-toggle"
    >
      {/* Sun icon – visible in dark mode, indicating "switch to light" */}
      <Sun
        className={`
          absolute w-5 h-5
          transition-all duration-500 ease-in-out
          text-amber-400
          group-hover:text-amber-300
          ${isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
          }
        `}
      />
      {/* Moon icon – visible in light mode, indicating "switch to dark" */}
      <Moon
        className={`
          absolute w-5 h-5
          transition-all duration-500 ease-in-out
          text-indigo-500
          group-hover:text-indigo-400
          ${isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
          }
        `}
      />
    </button>
  );
}
