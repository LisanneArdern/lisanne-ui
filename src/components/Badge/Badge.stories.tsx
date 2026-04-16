import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Editorial"
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {
  args: {
    variant: "new",
    children: "New"
  }
};

export const Beta: Story = {
  args: {
    variant: "beta",
    children: "Beta"
  }
};

export const Live: Story = {
  args: {
    variant: "live",
    children: "Live"
  }
};

export const Deprecated: Story = {
  args: {
    variant: "deprecated",
    children: "Deprecated"
  }
};

export const Draft: Story = {
  args: {
    variant: "draft",
    children: "Draft"
  }
};
