import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Publishes immediately"
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    placement: "top",
    children: <Button>Hover or focus</Button>
  }
};

export const Bottom: Story = {
  args: {
    placement: "bottom",
    children: <Button>Hover or focus</Button>
  }
};

export const Right: Story = {
  args: {
    placement: "right",
    children: <Button variant="secondary">Learn more</Button>
  }
};
