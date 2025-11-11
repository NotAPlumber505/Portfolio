import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Track mouse position for spotlight effect
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.setProperty('--mouse-x', `${x}%`);
  document.body.style.setProperty('--mouse-y', `${y}%`);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);