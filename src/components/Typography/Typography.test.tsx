import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("renders a display variant as an h1 by default", () => {
    render(<Typography variant="display">Hello</Typography>);
    expect(screen.getByRole("heading", { level: 1, name: "Hello" })).toBeInTheDocument();
  });

  it("allows overriding the rendered element via `as`", () => {
    render(
      <Typography variant="body" as="span" data-testid="text">
        Hello
      </Typography>
    );
    expect(screen.getByTestId("text").tagName).toBe("SPAN");
  });

  it("applies the variant class", () => {
    render(<Typography variant="eyebrow">Section 01</Typography>);
    expect(screen.getByText("Section 01")).toHaveClass("lsn-type--eyebrow");
  });
});
