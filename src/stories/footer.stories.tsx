import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../components/footer/footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
