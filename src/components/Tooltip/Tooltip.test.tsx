import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("reveals tooltip content on hover", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Publishes immediately">
        <button type="button">Publish</button>
      </Tooltip>
    );

    const trigger = screen.getByRole("button", { name: "Publish" });
    const tooltip = screen.getByRole("tooltip");

    expect(tooltip).not.toHaveAttribute("data-visible");

    await user.hover(trigger);
    expect(tooltip).toHaveAttribute("data-visible");
    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
  });

  it("reveals tooltip on keyboard focus", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Keyboard friendly">
        <button type="button">Publish</button>
      </Tooltip>
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).not.toHaveAttribute("data-visible");

    await user.tab();
    expect(tooltip).toHaveAttribute("data-visible");
  });
});
