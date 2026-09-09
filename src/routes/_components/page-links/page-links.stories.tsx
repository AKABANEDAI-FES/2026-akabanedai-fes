import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { PageLinks } from './page-links'

const meta = {
  title: 'Routes/PageLinks',
  component: PageLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof PageLinks>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
