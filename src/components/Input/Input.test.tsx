import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders label and helper text", () => {
    render(<Input label="Email" helperText="Used for updates." />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByText("Used for updates.")).toBeInTheDocument();
  });

  it("sets invalid attributes when error is provided", () => {
    render(<Input label="Email" error="Required field." />);
    const input = screen.getByLabelText("Email");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Required field.")).toBeInTheDocument();
  });
});
