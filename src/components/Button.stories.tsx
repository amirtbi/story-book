import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    disabled: false,
    size: "md",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      control: "select",
      table: {
        defaultValue: { summary: "primary", detail: "primary" },
      },
    },
    size: {
      description: "Size of button",
      table: {
        defaultValue: { summary: "md" },
        type: { summary: "md or sm" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};
