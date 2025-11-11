import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypingEffect } from "../hooks/useTypingEffect";
import projects from "../data/projects.json";

export default function Projects() {
  const titleText = "Projects";
  const { displayedText: displayedTitle } = useTypingEffect(titleText, 16, 0);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from all projects (flatten arrays)
  const allCategories = projects.flatMap(p => p.categories);
  const categories = ["All", ...Array.from(new Set(allCategories))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(selectedCategory));

  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start text-[var(--fg)] px-4 pt-16 pb-24 lg:pb-16 lg:pr-[22rem]">
      <section className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-8 min-h-[4rem]">
          {displayedTitle}<span className="animate-pulse">|</span>
        </h1>

        {/* Category Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[var(--terminal-green)] text-[var(--background)] border-[var(--terminal-green)] font-semibold'
                  : 'bg-[var(--button-bg)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--terminal-green)] hover:text-[var(--fg)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="relative bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10 hover:-translate-y-2 hover:border-[var(--terminal-green)]"
            >
              {/* Project Logo */}
              {project.logo && (
                <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-lg"
                  />
                </div>
              )}
              
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-2xl font-bold text-[var(--fg)] group-hover:text-[var(--terminal-green)] transition">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-1 ml-2">
                  {project.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-[var(--button-bg)] border border-[var(--terminal-green)] rounded text-[var(--terminal-green)] whitespace-nowrap"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[var(--muted)] mb-3">{project.subtitle}</p>
              <p className="text-sm text-[var(--muted)] mb-4">{project.date}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[var(--button-bg)] border border-[var(--border)] rounded text-xs text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-[var(--muted)]">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <p className="text-[var(--terminal-green)] text-sm font-semibold">
                Click to learn more →
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}