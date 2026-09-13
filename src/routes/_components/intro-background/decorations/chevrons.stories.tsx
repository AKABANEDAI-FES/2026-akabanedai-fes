import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Chevrons } from './chevrons'

const meta = {
  title: 'Routes/IntroBackground/Decorations/Chevrons',
  component: Chevrons,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'outline'] },
  },
  args: {
    variant: 'filled',
    size: '24rem',
  },
} satisfies Meta<typeof Chevrons>

export default meta

type Story = StoryObj<typeof meta>

export const Filled: Story = {}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}
