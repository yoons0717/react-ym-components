import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextInput from './TextInput'

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => (
  <TextInput {...args} />
)

export const Example1 = Template.bind({})
Example1.args = {
  name: 'hello',
  label: 'Button',
}
