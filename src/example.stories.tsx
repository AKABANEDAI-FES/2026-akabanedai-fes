import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Example } from './example'

const meta = {
  component: Example,
  tags: ['autodocs'],
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'ポップオーバーを開く',
    title: 'ポップオーバー',
    description: 'Base UI の Popover を使ったコンポーネントの例です。',
  },
}

export const Opened: Story = {
  args: Default.args,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: args.label }))
  },
}
