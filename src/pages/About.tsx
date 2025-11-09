import React from "react";
import { useNavigate } from "react-router-dom";
import { useShellNavigation } from "../hooks/useShellNavigation";
import about from "../data/about.json";

const items = [
  { id: "about", label: "About", path: "/" },
  { id: "education", label: "Education & Skills", path: "/education" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function About() {
  const navigate = useNavigate();
  const onEnter = (index: number) => navigate(items[index].path);
  const { selectedIndex, getItemProps } = useShellNavigation(items.length, 0, onEnter);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-[var(--background)] text-[var(--fg)]">
      <section className="w-full max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-[var(--panel)] border border-[var(--border)] flex items-center justify-center">
            <span className="text-[var(--muted)]">Image</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--fg)]">
            Hi, I'm {about.name},
            <br />
            a Full Stack Software Engineer
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-[var(--muted)] max-w-3xl">
            {about.bio}
          </p>
        </div>
      </section>

      <section aria-label="Quick actions" className="w-full px-6 mb-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6 md:p-8 flex flex-col items-center gap-4">
            {/* vertical stack (mobile layout) but larger on desktop */}
            {items.map((it, i) => {
              const props = getItemProps(i) as any;
              // remove role/aria-selected (buttons)
              const { role, "aria-selected": _, ...rest } = props;
              return (
                <button
                  key={it.id}
                  {...rest}
                  onClick={() => navigate(it.path)}
                  className={`w-full md:w-3/4 lg:w-2/3 px-6 py-4 md:py-5 lg:py-6 text-lg md:text-2xl lg:text-3xl rounded-lg border border-[var(--border)] text-[var(--fg)] hover:shadow-md transition ${props.className}`}
                >
                  <span className="font-semibold">{it.label}</span>
                  {selectedIndex === i ? <span className="ml-3 text-sm text-[var(--muted)]">↵</span> : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}