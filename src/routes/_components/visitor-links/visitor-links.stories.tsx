import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { VisitorLinks } from './visitor-links'

const meta = {
  title: 'VisitorLinks',
  component: VisitorLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof VisitorLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
