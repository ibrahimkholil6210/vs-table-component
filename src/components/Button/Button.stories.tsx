import React from 'react'
import { ComponentStory } from '@storybook/react';
import VsButton from './index';

export default {
  title: 'Components/Button',
  component: VsButton
};

const Template: ComponentStory<typeof VsButton> = (args) => {
  return <VsButton {...args}>Button</VsButton>;
};

export const Button = Template.bind({});
Button.args = {
    label: 'Button'
}
