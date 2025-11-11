import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ShellTerminalNav from "./components/ShellTerminalNav";
import MobileNav from "./components/MobileNav";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

const App: React.FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <ShellTerminalNav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;