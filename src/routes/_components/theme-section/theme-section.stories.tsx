import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { ThemeSection } from './theme-section'

const meta = {
  title: 'Pages/Top/ThemeSection',
  component: ThemeSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ThemeSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
