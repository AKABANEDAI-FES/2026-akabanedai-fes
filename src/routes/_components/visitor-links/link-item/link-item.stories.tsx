import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { LinkItem } from './link-item'

const meta = {
  title: 'Pages/Top/VisitorLinks/LinkItem',
  component: LinkItem,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    to: '/',
    text: 'ご来場の皆様へ',
  },
}
