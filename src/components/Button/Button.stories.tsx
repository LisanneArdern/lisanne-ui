import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Get started"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Learn more"
  }
};

export const Disabled: Story = {
  args: {
    children: "Get started",
    disabled: true
  }
};
