import type { Meta, StoryObj } from '@storybook/react';

import StepTitle from './StepTitle';

const meta: Meta<typeof StepTitle> = {
  component: StepTitle,
};

export default meta;
type Story = StoryObj<typeof StepTitle>;

export const Default: Story = {
  args: {
    number: 1,
    title: 'Your info'
  }
};

export const Active: Story = {
  args: {
    number: 1,
    title: 'Your info',
    isActive: true
  }
};
