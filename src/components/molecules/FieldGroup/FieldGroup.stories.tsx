import type { Meta, StoryObj } from '@storybook/react';

import FieldGroup from './FieldGroup';
import formData from 'src/data/formData';

const meta: Meta<typeof FieldGroup> = {
  component: FieldGroup
};

export default meta;
type Story = StoryObj<typeof FieldGroup>;
const fieldGroupData = formData[0]?.fieldGroups?.[0];

export const Default: Story = {
  args: {
    fieldGroupData
  }
};
