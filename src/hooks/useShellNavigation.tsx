// Simple hook to handle up/down/enter navigation for a list
import { useEffect, useState, useCallback } from "react";

export function useShellNavigation(
  count: number,
  initial = 0,
  onEnter?: (index: number) => void
) {
  const [selected, setSelected] = useState<number>(() =>
    Math.max(0, Math.min(initial, Math.max(0, count - 1)))
  );

  const clamp = useCallback((i: number) => {
    if (count <= 0) return 0;
    if (i < 0) return count - 1;
    if (i >= count) return 0;
    return i;
  }, [count]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => clamp(s - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => clamp(s + 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        onEnter?.(selected);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clamp, selected, onEnter]);

  function getItemProps(index: number) {
    return {
      role: "option",
      "aria-selected": selected === index,
      onMouseEnter: () => setSelected(index),
      onClick: () => onEnter?.(index),
      // use your CSS variables: selected shows a left green border and panel bg
      className:
        selected === index
          ? "bg-[var(--panel)] text-[var(--fg)] border-l-4 border-[var(--terminal-green)]"
          : "text-[var(--muted)] hover:bg-[var(--panel)]",
    } as const;
  }

  return { selectedIndex: selected, setSelectedIndex: setSelected, getItemProps };
}