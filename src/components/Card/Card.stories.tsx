import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectDefault: Story = {
  args: {
    eyebrow: "Project - 01",
    title: "Design system audit",
    description: "Rebuilt token architecture for a product team of 12.",
    tags: ["React", "Figma"]
  }
};

export const ProjectInverted: Story = {
  args: {
    variant: "inverted",
    eyebrow: "Project - 02",
    title: "Component library",
    description: "Open source, bold editorial style. You're looking at it.",
    tags: ["TS", "Storybook"]
  }
};
