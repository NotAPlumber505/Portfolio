import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useShellNavigation } from "../hooks/useShellNavigation";
import ThemeToggle from "../ThemeToggle";

type Item = { id: string; label: string; path: string };

const ShellTerminalNav: FC = () => {
  const items: Item[] = [
    { id: "about", label: "About", path: "/" },
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "education", label: "Education & Skills", path: "/education" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const onEnter = (index: number) => {
    const path = items?.[index]?.path;
    if (path) navigate(path);
  };

  const count = Array.isArray(items) ? items.length : 0;
  const { selectedIndex, getItemProps } = useShellNavigation(count, 0, onEnter);

  const activeId = items?.[selectedIndex]?.id ? items[selectedIndex].id + "-nav" : undefined;

  // Hide navbar on the home/about page (return after all hooks are called)
  if (location.pathname === "/") return null;

  return (
    <nav className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-4 z-30">
      <div className="rounded-lg shadow-lg overflow-hidden w-80 bg-[var(--panel)] border border-[var(--border)]">
        <div className="px-4 py-3 flex items-center justify-between text-sm text-[var(--muted)] border-b border-[var(--border)]">
          <span className="font-medium">Navigate</span>
          <ThemeToggle />
        </div>

        <ul role="listbox" aria-activedescendant={activeId} className="p-2 space-y-2">
          {items.map((it, i) => {
            const props = getItemProps(i);
            return (
              <li
                key={it.id}
                id={it.id + "-nav"}
                {...(props as any)}
                onClick={() => navigate(it.path)}
                className={`cursor-pointer px-4 py-3 text-base rounded ${props.className}`}
              >
                <span className="font-medium">{it.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default ShellTerminalNav;