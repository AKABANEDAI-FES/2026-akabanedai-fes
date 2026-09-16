import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Footer } from './footer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FewSponsors: Story = {
  args: {
    sponsors: ['アミカ　赤羽西口店', '株式会社カレッジヤード', '内田商店'],
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}
