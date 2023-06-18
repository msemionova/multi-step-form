import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Default button text'
  }
};

export const Transparent: Story = {
  args: {
    children: 'Default button text',
    type: 'transparent'
  }
};
