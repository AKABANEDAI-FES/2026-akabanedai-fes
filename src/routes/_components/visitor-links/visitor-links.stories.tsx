import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { VisitorLinks } from './visitor-links'

const meta: Meta<typeof VisitorLinks> = {
  title: 'Components/VisitorLinks/VisitorLinks',
  component: VisitorLinks,
}

export default meta
type Story = StoryObj<typeof VisitorLinks>

export const Default: Story = {}
