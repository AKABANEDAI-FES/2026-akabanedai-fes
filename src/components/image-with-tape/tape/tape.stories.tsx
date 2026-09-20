import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Tape } from './tape'

import styles from './tape.stories.module.css'

const meta = {
  title: 'Components/ImageWithTape/Tape',
  component: Tape,
  tags: ['autodocs'],
  args: {
    className: styles.tape,
  },
} satisfies Meta<typeof Tape>

export default meta

type Story = StoryObj<typeof meta>

export const Striped: Story = {
  args: {
    variant: 'striped',
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
}

export const Translucent: Story = {
  args: {
    variant: 'translucent',
  },
}
