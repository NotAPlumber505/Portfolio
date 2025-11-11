import React, { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-[var(--fg)]">
      <div className="bg-[var(--panel)] border-2 border-[var(--terminal-green)] rounded-lg p-8 shadow-2xl max-w-md">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-[var(--terminal-green)] animate-pulse"></div>
          <span className="text-[var(--terminal-green)] font-mono text-sm">SYSTEM</span>
        </div>
        
        <pre className="font-mono text-sm text-[var(--fg)] whitespace-pre-wrap">
          <span className="text-[var(--terminal-green)]">$</span> loading resources{dots}
        </pre>
        
        <div className="mt-4 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[var(--terminal-green)] animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-[var(--terminal-green)] animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-[var(--terminal-green)] animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
