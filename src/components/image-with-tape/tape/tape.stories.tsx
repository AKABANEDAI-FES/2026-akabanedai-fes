import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Tape, type TapeVariant } from './tape'

import styles from './tape.stories.module.css'

const meta = {
  component: Tape,
  tags: ['autodocs'],
} satisfies Meta<typeof Tape>

export default meta

type Story = StoryObj<typeof meta>

const variants: TapeVariant[] = ['striped', 'dark', 'translucent']

export const AllVariants: Story = {
  args: {
    variant: 'striped',
  },
  render: () => (
    <div className={styles.list}>
      {variants.map((variant) => (
        <Tape key={variant} variant={variant} className={styles.tape} />
      ))}
    </div>
  ),
}
