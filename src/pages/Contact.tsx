import React from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import about from "../data/about.json";

export default function Contact() {
  const titleText = "Let's Connect";
  const { displayedText: displayedTitle } = useTypingEffect(titleText, 16, 0);

  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start text-[var(--fg)] px-4 pt-16 pb-24 lg:pb-16 lg:pr-[22rem]">
      <section className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-8 min-h-[4rem]">
          {displayedTitle}<span className="animate-pulse">|</span>
        </h1>

        <div className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-8 mb-8">
          <p className="text-xl text-[var(--muted)] mb-8">
            I thrive on building things that connect creativity and code. If my background aligns with what you're looking for, 
            or if you'd like to chat about games, software, or cool new projects, feel free to reach out!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-1">Email</h3>
                <a
                  href={`mailto:${about.email}`}
                  className="text-[var(--terminal-green)] hover:underline"
                >
                  {about.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-1">Phone</h3>
                <a
                  href={`tel:${about.phone}`}
                  className="text-[var(--terminal-green)] hover:underline"
                >
                  {about.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-1">LinkedIn</h3>
                <a
                  href={`https://www.linkedin.com/in/mario-casas-08491b21b/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--terminal-green)] hover:underline"
                >
                  mario-casas
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">💻</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-1">GitHub</h3>
                <a
                  href={`https://github.com/NotAPlumber505`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--terminal-green)] hover:underline"
                >
                  github.com/NotAPlumber505
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--panel)] border border-[var(--terminal-green)] rounded-lg p-6">
          <p className="text-[var(--muted)] text-center">
            💡 Currently open to full-time opportunities and exciting collaborations!
          </p>
        </div>
      </section>
    </main>
  );
}