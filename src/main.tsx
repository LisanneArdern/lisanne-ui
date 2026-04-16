import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Badge, Button } from "./components";
import { tokens } from "./tokens";
import "./styles.css";

export function PreviewApp() {
  return (
    <main className="preview-shell">
      <p className="preview-eyebrow">Lisanne UI / Issue 001</p>
      <h1 className="preview-title">
        Bold, editorial components for modern products.
      </h1>
      <p className="preview-copy">
        This is your design system sandbox. Use it to quickly shape component
        tone, visual hierarchy, and interaction details before publishing.
      </p>
      <div className="preview-actions">
        <Badge>New</Badge>
        <Badge variant="beta">Beta</Badge>
        <Badge variant="live">Live</Badge>
        <Badge variant="deprecated">Deprecated</Badge>
        <Badge variant="draft">Draft</Badge>
      </div>
      <div className="preview-actions">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  );
}

const rootStyles = document.documentElement.style;
rootStyles.setProperty("--lsn-border-default", tokens.borderWidth.default);
rootStyles.setProperty("--lsn-border-soft", tokens.borderWidth.soft);
rootStyles.setProperty("--lsn-letter-label", tokens.letterSpacing.label);
rootStyles.setProperty("--lsn-letter-button", tokens.letterSpacing.button);
rootStyles.setProperty("--lsn-font-body", String(tokens.fontWeight.body));
rootStyles.setProperty("--lsn-font-bold", String(tokens.fontWeight.bold));
rootStyles.setProperty("--lsn-radius-none", tokens.radius.none);
rootStyles.setProperty("--lsn-radius-card", tokens.radius.card);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreviewApp />
  </StrictMode>
);
