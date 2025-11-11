import { useTypingEffect } from "../hooks/useTypingEffect";
import experience from "../data/experience.json";

export default function Experience() {
  const titleText = "Experience";
  const { displayedText: displayedTitle } = useTypingEffect(titleText, 16, 0);

  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start text-[var(--fg)] px-4 pt-16 pb-24 lg:pb-16 lg:pr-[22rem]">
      <section className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-8 min-h-[4rem]">
          {displayedTitle}<span className="animate-pulse">|</span>
        </h1>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--terminal-green)] transition-all"
            >
              {/* Header */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[var(--fg)] mb-1">
                  {exp.title}
                </h2>
                <h3 className="text-xl text-[var(--terminal-green)] mb-2">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                  <span>📅 {exp.period}</span>
                  <span>⏱️ {exp.duration}</span>
                  <span>📍 {exp.location}</span>
                  <span className="px-2 py-0.5 bg-[var(--button-bg)] border border-[var(--border)] rounded">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[var(--terminal-green)] mt-1 flex-shrink-0">▸</span>
                      <span className="text-[var(--muted)]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[var(--button-bg)] border border-[var(--terminal-green)] rounded text-xs text-[var(--fg)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
