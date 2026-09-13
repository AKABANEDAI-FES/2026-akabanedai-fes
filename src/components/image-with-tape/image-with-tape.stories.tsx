import type { Meta, StoryObj } from '@storybook/tanstack-react'

import campusMapImage from './campas_map1600x900.png'
import { ImageWithTape } from './image-with-tape'

const meta = {
  component: ImageWithTape,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageWithTape>

export default meta

type Story = StoryObj<typeof meta>

export const CampusMap: Story = {
  args: {
    src: campusMapImage,
    alt: 'キャンパスマップ',
  },
}
