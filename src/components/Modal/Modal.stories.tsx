import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button";

function ModalDemo({ dismissible = true }: { dismissible?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Publish this issue"
        description="Once published, the current draft goes live immediately to all readers."
        dismissible={dismissible}
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Publish</Button>
          </>
        }
      >
        <p style={{ margin: 0 }}>
          You can always revert to the previous version from the archive.
        </p>
      </Modal>
    </>
  );
}

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: false,
    onClose: () => {},
    title: "Publish this issue"
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ModalDemo />
};

export const NotDismissible: Story = {
  render: () => <ModalDemo dismissible={false} />
};
