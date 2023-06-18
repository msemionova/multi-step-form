import type { Meta, StoryObj } from '@storybook/react';

import StepContent from './StepContent';
import formData from 'src/data/formData';

const meta: Meta<typeof StepContent> = {
  component: StepContent
};

export default meta;
type Story = StoryObj<typeof StepContent>;

export const Step1: Story = {
  args: {
    stepData: formData[0]
  }
};

export const Step2: Story = {
  args: {
    stepData: formData[1]
  }
};
