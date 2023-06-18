import type { Meta, StoryObj } from '@storybook/react';

import PaymentType from './PaymentType';

const meta: Meta<typeof PaymentType> = {
  component: PaymentType,
};

export default meta;
type Story = StoryObj<typeof PaymentType>;

export const Default: Story = {
  args: {}
};
