import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';
import formData from 'src/formData';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    data: formData
  }
};
