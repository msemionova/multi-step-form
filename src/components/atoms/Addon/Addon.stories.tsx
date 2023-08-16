import type { Meta, StoryObj } from '@storybook/react';

import Addon from './Addon';

const meta: Meta<typeof Addon> = {
  component: Addon,
};

export default meta;
type Story = StoryObj<typeof Addon>;

export const AddonChecked: Story = {
  args: {
    id: 'test_id',
    title: 'Addon One',
    description: 'Addon description',
    priceMonthly: 2,
    priceYearly: 20,
    isChecked: true
  }
};

export const AddonUnchecked: Story = {
  args: {
    id: 'test_id',
    title: 'Addon One',
    description: 'Addon description',
    priceMonthly: 2,
    priceYearly: 20
  }
};
