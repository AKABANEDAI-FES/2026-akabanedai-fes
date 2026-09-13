import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Bolt } from './bolt'

const meta = {
  title: 'Routes/IntroBackground/Decorations/Bolt',
  component: Bolt,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: '16rem',
  },
} satisfies Meta<typeof Bolt>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
