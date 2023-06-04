import type { Meta, StoryObj } from '@storybook/react';

import StepItem from './StepItem';

const meta: Meta<typeof StepItem> = {
  component: StepItem,
};

export default meta;
type Story = StoryObj<typeof StepItem>;

export const Default: Story = {
  args: {
    text: '1'
  }
};
