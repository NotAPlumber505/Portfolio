import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, GraduationCap, FolderGit2, Mail } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const navItems: NavItem[] = [
  { id: "about", label: "About", path: "/", icon: Home },
  { id: "experience", label: "Experience", path: "/experience", icon: Briefcase },
  { id: "education", label: "Education", path: "/education", icon: GraduationCap },
  { id: "projects", label: "Projects", path: "/projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", path: "/contact", icon: Mail },
];

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[var(--panel)] border-t border-[var(--border)] shadow-lg">
      <div className="flex items-center justify-around h-16 max-w-screen-xl mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all cursor-pointer ${
                isActive
                  ? "text-[var(--terminal-green)]"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              <Icon 
                size={20} 
                className={`transition-all ${isActive ? "scale-110" : ""}`}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
