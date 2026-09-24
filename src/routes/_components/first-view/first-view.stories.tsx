import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { FirstView } from './first-view'

const meta = {
  title: 'Pages/Top/FirstView',
  component: FirstView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FirstView>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
