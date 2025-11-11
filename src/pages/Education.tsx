import { useTypingEffect } from "../hooks/useTypingEffect";
import education from "../data/education.json";

export default function Education() {
  const titleText = "Education & Skills";
  const { displayedText: displayedTitle } = useTypingEffect(titleText, 16, 0);

  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start text-[var(--fg)] px-4 pt-16 pb-24 lg:pb-16 lg:pr-[22rem]">
      <section className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-8 min-h-[4rem]">
          {displayedTitle}<span className="animate-pulse">|</span>
        </h1>

        {/* Education */}
        <div className="mb-12 bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[var(--terminal-green)] mb-4">
            {education.degree.institution}
          </h2>
          <div className="space-y-2 text-[var(--muted)]">
            <p className="text-xl text-[var(--fg)]">{education.degree.degree}</p>
            <p>📍 {education.degree.location}</p>
            <p>🎓 GPA: {education.degree.gpa}</p>
            <p>📅 Expected: {education.degree.expected}</p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">Relevant Coursework:</h3>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[var(--button-bg)] border border-[var(--border)] rounded text-sm text-[var(--muted)]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[var(--terminal-green)]">Technical Skills</h2>
          
          {Object.entries(education.skills).map(([category, items]) => (
            <div key={category} className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-5">
              <h3 className="text-lg font-semibold text-[var(--fg)] mb-3 capitalize">
                {category === 'ml' ? 'ML & Data' : category === 'devops' ? 'DevOps & Tools' : category}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[var(--button-bg)] hover:bg-[var(--button-hover)] border border-[var(--terminal-green)] rounded text-sm text-[var(--fg)] transition"
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