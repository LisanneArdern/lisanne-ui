import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Badge, Button, Card, Input, Modal, Textarea } from "./components";
import { tokens } from "./tokens";
import "./styles.css";

export function PreviewApp() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Button onClick={() => setModalOpen(true)}>Get started</Button>
        <Button variant="secondary">Learn more</Button>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Publish this issue"
        description="Once published, the current draft goes live immediately to all readers."
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setModalOpen(false)}>Publish</Button>
          </>
        }
      >
        <p style={{ margin: 0 }}>
          You can revert to the previous version from the archive at any time.
        </p>
      </Modal>
      <section className="preview-card-grid">
        <Card
          eyebrow="Project - 01"
          title="Design system audit"
          description="Rebuilt token architecture for a product team of 12."
          tags={["React", "Figma"]}
        />
        <Card
          variant="inverted"
          eyebrow="Project - 02"
          title="Component library"
          description="Open source, bold editorial style. You're looking at it."
          tags={["TS", "Storybook"]}
        />
      </section>
      <section className="preview-card-grid">
        <article className="preview-card">
          <Input
            label="Email"
            placeholder="Email address"
            helperText="We'll never share your details."
          />
        </article>
        <article className="preview-card">
          <Textarea
            label="Pitch"
            placeholder="Share your editorial angle..."
            error="Please provide at least 20 characters so we can share helpful context."
          />
        </article>
      </section>
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
