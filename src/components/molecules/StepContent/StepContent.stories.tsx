import type { Meta, StoryObj } from '@storybook/react';

import StepContent from './StepContent';
import formData from 'src/data/formData';

const meta: Meta<typeof StepContent> = {
  component: StepContent
};

export default meta;
type Story = StoryObj<typeof StepContent>;

export const Default: Story = {
  args: {
    stepData: formData[0]
  }
};
