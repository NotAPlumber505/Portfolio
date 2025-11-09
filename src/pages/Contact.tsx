import React from "react";
import about from "../data/about.json";

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-8">
      <section id="contact" className="py-8">
        <h1 className="text-3xl font-bold text-[var(--fg)]">Contact</h1>
        <p className="mt-3 text-[var(--muted)]">You can reach me at {about.email}</p>
      </section>
    </main>
  );
}