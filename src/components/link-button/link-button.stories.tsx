import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { IconItemSearch } from '../icons'
import { LinkButton } from './link-button'

const meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    children: '企画一覧',
    icon: IconItemSearch,
  },
}
