import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { CampusMap } from './campus-map'

const meta = {
  component: CampusMap,
  tags: ['autodocs'],
} satisfies Meta<typeof CampusMap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
