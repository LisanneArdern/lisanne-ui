import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components";
import "./styles.css";

export function PreviewApp() {
  return (
    <main
      style={{
        display: "grid",
        gap: "16px",
        maxWidth: "420px",
        margin: "64px auto",
        padding: "0 16px"
      }}
    >
      <h1 style={{ margin: 0 }}>Lisanne UI Preview</h1>
      <p style={{ margin: 0, color: "#344054" }}>
        Use this page to quickly test components during development.
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
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
