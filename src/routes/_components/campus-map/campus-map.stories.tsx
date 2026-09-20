import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { CampusMap } from './campus-map'

const meta = {
  title: 'Pages/Top/CampusMap',
  component: CampusMap,
  tags: ['autodocs'],
} satisfies Meta<typeof CampusMap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
