import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "./colors";
import { spacing, spacingPx } from "./spacing";

const meta = {
  title: "Foundations / Tokens",
  parameters: { layout: "padded" }
} satisfies Meta;

export default meta;

type Story = StoryObj;

type ColorLeaf = { path: string; value: string };

function walkColors(node: unknown, prefix: string, out: ColorLeaf[]): void {
  if (node && typeof node === "object" && !Array.isArray(node)) {
    for (const [k, v] of Object.entries(node)) {
      const p = prefix ? `${prefix}.${k}` : k;
      if (typeof v === "string") out.push({ path: p, value: v });
      else walkColors(v, p, out);
    }
  }
}

function Swatch({ path, value }: ColorLeaf) {
  if (path.startsWith("foreground.")) {
    const onInverted = path.includes("onInverted");
    return (
      <div
        style={{
          display: "grid",
          gap: 6,
          padding: spacingPx.md,
          background: onInverted ? colors.background.inverted : colors.background.surfaceMuted,
          border: "var(--lsn-border-default) solid var(--lsn-color-border-subtle)"
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.35,
            fontFamily: '"Inter Tight", sans-serif',
            color: value
          }}
        >
          Editorial placeholder copy for {path}.
        </p>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11 }}>
          {path} · {value}
        </span>
      </div>
    );
  }

  const needsBorder =
    value === "#ffffff" || value.startsWith("#fff") || value === "transparent";

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div
        style={{
          height: 56,
          background: value,
          border: needsBorder ? "var(--lsn-border-soft) solid var(--lsn-color-border-subtle)" : "none",
          outline: needsBorder ? "none" : undefined
        }}
      />
      <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11 }}>{path}</span>
      <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, opacity: 0.65 }}>
        {value}
      </span>
    </div>
  );
}

export const Colours: Story = {
  name: "Colours",
  render() {
    const leaves: ColorLeaf[] = [];
    walkColors(colors, "", leaves);

    const ordered = [...leaves].sort((a, b) => a.path.localeCompare(b.path));

    return (
      <div style={{ display: "grid", gap: spacingPx["2xl"], maxWidth: 880 }}>
        <header style={{ display: "grid", gap: spacingPx.sm }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--lsn-color-foreground-muted)"
            }}
          >
            Foundations
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(22px, 4vw, 28px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.05
            }}
          >
            Colour tokens
          </h1>
          <p style={{ margin: 0, maxWidth: "58ch", lineHeight: 1.55, fontSize: 14 }}>
            Values mirror <code style={{ fontSize: 12 }}>colors.ts</code> and{" "}
            <code style={{ fontSize: 12 }}>:root</code> custom properties prefixed with{" "}
            <code style={{ fontSize: 12 }}>--lsn-color-</code>.
          </p>
        </header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: spacingPx.lg,
            alignItems: "start"
          }}
        >
          {ordered.map((leaf) => (
            <Swatch key={leaf.path} {...leaf} />
          ))}
        </div>
      </div>
    );
  }
};

export const Spacing: Story = {
  render() {
    const entries = Object.entries(spacing).sort(([, a], [, b]) => a - b);

    return (
      <div style={{ display: "grid", gap: spacingPx["2xl"], maxWidth: 640 }}>
        <header style={{ display: "grid", gap: spacingPx.sm }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--lsn-color-foreground-muted)"
            }}
          >
            Foundations
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(22px, 4vw, 28px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.05
            }}
          >
            Spacing scale
          </h1>
          <p style={{ margin: 0, maxWidth: "58ch", lineHeight: 1.55, fontSize: 14 }}>
            Numeric scale in pixels. Use <code style={{ fontSize: 12 }}>spacing</code> /{" "}
            <code style={{ fontSize: 12 }}>spacingPx</code> in TS, or{" "}
            <code style={{ fontSize: 12 }}>--lsn-space-*</code> in CSS.
          </p>
        </header>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "grid",
            gap: spacingPx.md,
            borderTop: "var(--lsn-border-default) solid var(--lsn-color-foreground)",
            paddingTop: spacingPx.lg
          }}
        >
          {entries.map(([name, px]) => (
            <li
              key={name}
              style={{
                display: "grid",
                gridTemplateColumns: "112px 1fr auto",
                alignItems: "center",
                gap: spacingPx.lg,
                fontFamily: "ui-monospace, monospace",
                fontSize: 13
              }}
            >
              <span>{name}</span>
              <div
                style={{
                  height: spacingPx.sm,
                  background: "var(--lsn-color-foreground)",
                  width: spacingPx[name as keyof typeof spacing],
                  justifySelf: "start"
                }}
              />
              <span style={{ opacity: 0.75 }}>{px}px</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
