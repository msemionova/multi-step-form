import type { Meta, StoryObj } from '@storybook/react';

import StepTitle from './Summary';

const meta: Meta<typeof StepTitle> = {
  component: StepTitle,
};

export default meta;
type Story = StoryObj<typeof StepTitle>;

export const Default: Story = {
  args: {}
};
