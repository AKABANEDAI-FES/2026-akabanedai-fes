import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { LinkItem } from './link-item'

const meta: Meta<typeof LinkItem> = {
  title: 'Components/VisitorLinks/LinkItem',
  component: LinkItem,
}

export default meta
type Story = StoryObj<typeof LinkItem>

export const Default: Story = {
  args: {
    href: '/',
    text: 'ご来場の皆様へ',
  },
}
