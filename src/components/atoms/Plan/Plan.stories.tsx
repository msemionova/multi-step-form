import type { Meta, StoryObj } from '@storybook/react';

import Plan from './Plan';

const meta: Meta<typeof Plan> = {
  component: Plan,
};

export default meta;
type Story = StoryObj<typeof Plan>;

export const ArcadeActive: Story = {
  args: {
    id: 'arcade',
    priceMonthly: 5,
    priceYearly: 50,
    isChecked: true
  }
};

export const Advanced: Story = {
  args: {
    id: 'advanced',
    priceMonthly: 7,
    priceYearly: 70
  }
};

export const Pro: Story = {
  args: {
    id: 'pro',
    priceMonthly: 99,
    priceYearly: 999
  }
};
