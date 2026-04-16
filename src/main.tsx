import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components";
import "./styles.css";

export function PreviewApp() {
  return (
    <main className="preview-shell">
      <p className="preview-eyebrow">Lisanne UI / Issue 001</p>
      <h1 className="preview-title">Bold, editorial components for modern products.</h1>
      <p className="preview-copy">
        This is your design system sandbox. Use it to quickly shape component
        tone, visual hierarchy, and interaction details before publishing.
      </p>
      <div className="preview-actions">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreviewApp />
  </StrictMode>
);
