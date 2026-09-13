import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Arrow } from './arrow'

const meta = {
  title: 'Routes/IntroBackground/Decorations/Arrow',
  component: Arrow,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: '16rem',
  },
} satisfies Meta<typeof Arrow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
