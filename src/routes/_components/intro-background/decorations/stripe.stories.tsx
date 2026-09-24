import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Stripe, type StripeColor } from './stripe'

const colors = ['primary', 'secondary', 'accent'] satisfies StripeColor[]

const meta = {
  title: 'Pages/Top/IntroBackground/Decorations/Stripe',
  component: Stripe,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    from: { control: 'inline-radio', options: colors },
    to: { control: 'inline-radio', options: colors },
  },
  args: {
    length: '24rem',
    thickness: '2rem',
    from: 'secondary',
    to: 'primary',
  },
} satisfies Meta<typeof Stripe>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Accent: Story = {
  args: {
    to: 'accent',
  },
}
