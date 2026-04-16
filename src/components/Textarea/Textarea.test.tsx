import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders label and helper text", () => {
    render(<Textarea label="Notes" helperText="Maximum 500 characters." />);
    expect(screen.getByLabelText("Notes")).toBeInTheDocument();
    expect(screen.getByText("Maximum 500 characters.")).toBeInTheDocument();
  });

  it("sets invalid attributes when error is provided", () => {
    render(<Textarea label="Notes" error="This field is required." />);
    const textarea = screen.getByLabelText("Notes");

    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("This field is required.")).toBeInTheDocument();
  });
});
