import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders structured editorial content", () => {
    render(
      <Card
        eyebrow="Project - 01"
        title="Design system audit"
        description="Rebuilt token architecture for a product team of 12."
        tags={["React", "Figma"]}
      />
    );

    expect(screen.getByText("Project - 01")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Design system audit" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Rebuilt token architecture for a product team of 12.")
    ).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies inverted class for variant", () => {
    const { container } = render(<Card variant="inverted" title="Library" />);
    expect(container.firstChild).toHaveClass("lsn-card--inverted");
  });
});
