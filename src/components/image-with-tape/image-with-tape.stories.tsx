import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { ImageWithTape } from './image-with-tape'

const meta = {
  component: ImageWithTape,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageWithTape>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://placehold.jp/ababab/ffffff/1600x900.png?text=%E7%94%BB%E5%83%8F',
    alt: 'サンプル画像',
  },
}
