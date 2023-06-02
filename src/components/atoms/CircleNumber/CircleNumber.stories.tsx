import type { Meta, StoryObj } from '@storybook/react';

import CircleNumber from './CircleNumber';

const meta: Meta<typeof CircleNumber> = {
  component: CircleNumber,
};

export default meta;
type Story = StoryObj<typeof CircleNumber>;

export const Default: Story = {
  args: {
    children: '1'
  }
};

export const Active: Story = {
  args: {
    children: '1',
    isActive: true
  }
};
