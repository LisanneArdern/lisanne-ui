import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";

beforeAll(() => {
  if (!HTMLDialogElement.prototype.showModal) {
    HTMLDialogElement.prototype.showModal = function showModal() {
      this.setAttribute("open", "");
    };
  }
  if (!HTMLDialogElement.prototype.close) {
    HTMLDialogElement.prototype.close = function close() {
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    };
  }
});

describe("Modal", () => {
  it("renders title and description when open", () => {
    render(
      <Modal
        open
        onClose={() => {}}
        title="Publish issue"
        description="This will go live immediately."
      />
    );

    expect(
      screen.getByRole("heading", { name: "Publish issue" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("This will go live immediately.")
    ).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(<Modal open onClose={onClose} title="Publish issue" />);

    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("hides the close button when not dismissible", () => {
    render(
      <Modal open onClose={() => {}} title="Confirm" dismissible={false} />
    );

    expect(screen.queryByRole("button", { name: "Close dialog" })).toBeNull();
  });
});
