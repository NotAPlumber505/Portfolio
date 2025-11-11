import { useNavigate, useLocation } from "react-router-dom";
import { useShellNavigation } from "../hooks/useShellNavigation";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { Home, Briefcase, GraduationCap, FolderGit2, Mail } from "lucide-react";
import about from "../data/about.json";
import profilePic from "../assets/profile_pic.jpg";
import ThemeToggle from "../ThemeToggle";

const items = [
  { id: "about", label: "About", path: "/", icon: Home },
  { id: "experience", label: "Experience", path: "/experience", icon: Briefcase },
  { id: "education", label: "Education & Skills", path: "/education", icon: GraduationCap },
  { id: "projects", label: "Projects", path: "/projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", path: "/contact", icon: Mail },
];

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();
  const onEnter = (index: number) => navigate(items[index].path);
  
  // Filter out About when on About page
  const displayItems = items.filter(item => item.path !== location.pathname);
  const { selectedIndex, getItemProps } = useShellNavigation(displayItems.length, 0, onEnter);

  // Typing effects for name and bio
  const nameText = `Hi, I'm ${about.name},`;
  const titleText = "a Full Stack Software Engineer";
  const { displayedText: displayedName, isComplete: nameComplete } = useTypingEffect(nameText, 20, 0);
  const { displayedText: displayedTitle, isComplete: titleComplete } = useTypingEffect(titleText, 20, nameText.length * 20);
  const { displayedText: displayedBio } = useTypingEffect(about.bio, 12, (nameText.length + titleText.length) * 20 + 300);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start text-[var(--fg)] pb-20 lg:pb-0">
      {/* Theme toggle for About page */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <section className="w-full max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="flex-shrink-0">
          <img 
            src={profilePic} 
            alt={`${about.name} profile picture`}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-[var(--border)] shadow-xl"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--fg)] min-h-[7rem]">
            {displayedName}
            {nameComplete && (
              <>
                <br />
                {displayedTitle}
              </>
            )}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-[var(--muted)] max-w-3xl min-h-[4rem]">
            {displayedBio}
          </p>

          {/* Contact Icons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`mailto:${about.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-[var(--muted)] hover:text-[var(--terminal-green)] hover:border-[var(--terminal-green)] transition cursor-pointer"
              title={`Email: ${about.email}`}
            >
              <span className="text-xl">📧</span>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mario-casas-08491b21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-[var(--muted)] hover:text-[var(--terminal-green)] hover:border-[var(--terminal-green)] transition cursor-pointer"
              title="LinkedIn Profile"
            >
              <span className="text-xl">💼</span>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/NotAPlumber505"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-[var(--muted)] hover:text-[var(--terminal-green)] hover:border-[var(--terminal-green)] transition cursor-pointer"
              title="GitHub Profile"
            >
              <span className="text-xl">💻</span>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={`tel:${about.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-[var(--muted)] hover:text-[var(--terminal-green)] hover:border-[var(--terminal-green)] transition cursor-pointer"
              title={`Phone: ${about.phone}`}
            >
              <span className="text-xl">📱</span>
              <span className="text-sm font-medium">Phone</span>
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Quick actions" className="w-full px-6 mb-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6 md:p-8 flex flex-col items-center gap-4">
            {/* vertical stack (mobile layout) but larger on desktop */}
            {displayItems.map((it, i) => {
              const props = getItemProps(i) as any;
              // remove role/aria-selected (buttons)
              const { role, "aria-selected": _, ...rest } = props;
              const Icon = it.icon;
              
              return (
                <button
                  key={it.id}
                  {...rest}
                  onClick={() => navigate(it.path)}
                  className={`w-full md:w-3/4 lg:w-2/3 px-6 py-4 md:py-5 lg:py-6 text-lg md:text-2xl lg:text-3xl rounded-lg border border-[var(--border)] text-[var(--fg)] bg-[var(--button-bg)] hover:bg-[var(--button-hover)] hover:shadow-md transition cursor-pointer ${props.className}`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon size={28} className="flex-shrink-0" />
                    <span className="font-semibold">{it.label}</span>
                    {selectedIndex === i && <span className="text-sm text-[var(--muted)]">↵</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}