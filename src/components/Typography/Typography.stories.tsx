import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  args: {
    children: "Bold, editorial type for modern products."
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display" }
};

export const Headline: Story = {
  args: { variant: "headline" }
};

export const Title: Story = {
  args: { variant: "title", children: "Section title" }
};

export const Eyebrow: Story = {
  args: { variant: "eyebrow", children: "Section 01" }
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children:
      "An editorial design system for product teams who want clarity, confidence, and point of view."
  }
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Components are built with sharp corners, heavy borders, and uppercase metadata so they read as one system."
  }
};

export const Caption: Story = {
  args: { variant: "caption", children: "Updated 5 minutes ago" }
};
