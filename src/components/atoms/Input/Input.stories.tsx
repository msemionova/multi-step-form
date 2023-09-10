import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Default input'
  }
};

export const Password: Story = {
  args: {
    placeholder: 'Password input',
    type: 'password'
  }
};

export const Email: Story = {
  args: {
    placeholder: 'Email input',
    type: 'email'
  }
};

export const WithLabel: Story = {
  args: {
    id: 'with_label',
    placeholder: 'Default input with label',
    label: 'Label for the input'
  }
};
