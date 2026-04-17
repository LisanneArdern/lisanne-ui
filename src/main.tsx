import { StrictMode, useState } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  Badge,
  Button,
  Card,
  Input,
  Modal,
  Textarea,
  Tooltip,
  Typography
} from "./components";
import { tokens } from "./tokens";
import "./styles.css";

type PreviewSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

function PreviewSection({ eyebrow, title, children }: PreviewSectionProps) {
  return (
    <section className="preview-section">
      <header className="preview-section__header">
        <p className="preview-section__eyebrow">{eyebrow}</p>
        <h2 className="preview-section__title">{title}</h2>
      </header>
      <div className="preview-section__body">{children}</div>
    </section>
  );
}

export function PreviewApp() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="preview-shell">
      <header className="preview-intro">
        <p className="preview-eyebrow">Lisanne UI / Issue 001</p>
        <h1 className="preview-title">
          Bold, editorial components for modern products.
        </h1>
        <p className="preview-copy">
          This is your design system sandbox. Use it to quickly shape component
          tone, visual hierarchy, and interaction details before publishing.
        </p>
      </header>

      <PreviewSection eyebrow="Section 01" title="Typography">
        <div className="preview-type-stack">
          <Typography variant="display">
            Bold type for modern products.
          </Typography>
          <Typography variant="headline">
            A headline for the next feature.
          </Typography>
          <Typography variant="title">Section title</Typography>
          <Typography variant="eyebrow">Eyebrow label</Typography>
          <Typography variant="lead">
            Lead paragraph for dense editorial layouts. Uses body weight but
            larger size so it opens a section without competing with headlines.
          </Typography>
          <Typography variant="body">
            Body copy is kept at a comfortable reading size with generous line
            height so content feels like an editorial piece, not a UI label.
          </Typography>
          <Typography variant="caption">
            Caption — small metadata or timestamps.
          </Typography>
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Section 02" title="Buttons">
        <div className="preview-actions">
          <Button>Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Section 03" title="Badges">
        <div className="preview-actions">
          <Badge>New</Badge>
          <Badge variant="beta">Beta</Badge>
          <Badge variant="live">Live</Badge>
          <Badge variant="deprecated">Deprecated</Badge>
          <Badge variant="draft">Draft</Badge>
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Section 04" title="Inputs">
        <div className="preview-card-grid">
          <Input
            label="Email"
            placeholder="Email address"
            helperText="We'll never share your details."
          />
          <Textarea
            label="Pitch"
            placeholder="Share your editorial angle..."
            error="Please provide at least 20 characters so we can share helpful context."
          />
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Section 05" title="Card">
        <div className="preview-card-grid">
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
        </div>
      </PreviewSection>

      <PreviewSection eyebrow="Section 06" title="Overlays">
        <div className="preview-actions">
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          <Tooltip content="Read the docs" placement="top">
            <Button variant="secondary">Hover for tooltip</Button>
          </Tooltip>
        </div>
      </PreviewSection>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Publish this issue"
        description="Once published, the current draft goes live immediately to all readers."
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
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
