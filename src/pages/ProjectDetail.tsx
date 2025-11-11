import { useParams, useNavigate } from "react-router-dom";
import { useTypingEffect } from "../hooks/useTypingEffect";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center text-[var(--fg)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-[var(--button-bg)] border border-[var(--terminal-green)] rounded-lg text-[var(--fg)] hover:bg-[var(--button-hover)] transition"
          >
            ← Back to Projects
          </button>
        </div>
      </main>
    );
  }

  const { displayedText: displayedTitle } = useTypingEffect(project.title, 16, 0);

  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start text-[var(--fg)] px-4 pt-16 pb-24 lg:pb-16 lg:pr-[22rem]">
      <section className="w-full max-w-4xl mx-auto py-8">
        <button
          onClick={() => navigate("/projects")}
          className="mb-6 px-4 py-2 bg-[var(--button-bg)] border border-[var(--border)] rounded text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--terminal-green)] transition cursor-pointer"
        >
          ← Back to Projects
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-2">
          {displayedTitle}<span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl text-[var(--terminal-green)] mb-2">{project.subtitle}</p>
        <p className="text-[var(--muted)] mb-8">{project.date}</p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--fg)] mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[var(--panel)] border border-[var(--terminal-green)] rounded text-sm text-[var(--fg)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--fg)] mb-4">Key Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--terminal-green)] mt-1">▸</span>
                <span className="text-[var(--muted)]">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        {(project.github || project.demo || project.video) && (
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--button-bg)] border border-[var(--terminal-green)] rounded-lg text-[var(--fg)] hover:bg-[var(--button-hover)] transition cursor-pointer"
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--terminal-green)] text-[var(--background)] rounded-lg hover:opacity-90 transition cursor-pointer"
              >
                Live Demo
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--button-bg)] border border-[var(--terminal-green)] rounded-lg text-[var(--fg)] hover:bg-[var(--button-hover)] transition cursor-pointer"
              >
                📹 Video Demo
              </a>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
