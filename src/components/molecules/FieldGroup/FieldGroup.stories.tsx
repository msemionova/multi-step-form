import type { Meta, StoryObj } from '@storybook/react';

import FieldGroup from './FieldGroup';
import formData from 'src/data/formData';

const meta: Meta<typeof FieldGroup> = {
  component: FieldGroup
};

export default meta;
type Story = StoryObj<typeof FieldGroup>;
const inputsData = formData[0]?.fieldGroups?.[0];
const plansData = formData[1]?.fieldGroups?.[0];
const addonsData = formData[2]?.fieldGroups?.[0];

export const Inputs: Story = {
  args: {
    fieldGroupData: inputsData
  }
};

export const Plans: Story = {
  args: {
    fieldGroupData: plansData
  }
};

export const Addons: Story = {
  args: {
    fieldGroupData: addonsData
  }
};
