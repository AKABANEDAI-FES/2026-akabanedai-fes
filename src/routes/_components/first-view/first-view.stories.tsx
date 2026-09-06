import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { FirstView } from './first-view'

const meta = {
  title: 'Routes/FirstView',
  component: FirstView,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FirstView>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
