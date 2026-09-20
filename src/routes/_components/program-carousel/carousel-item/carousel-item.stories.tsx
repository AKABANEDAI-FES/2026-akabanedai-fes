import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { CarouselItem } from './carousel-item'

import styles from './carousel-item.stories.module.css'

const meta = {
  title: 'Pages/Top/ProgramCarousel/CarouselItem',
  component: CarouselItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={styles.frame}>
        <Story />
      </div>
    ),
  ],
  args: {
    program: {
      id: '1',
      name: '縁日',
      logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=1',
    },
  },
} satisfies Meta<typeof CarouselItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: {
    isActive: true,
  },
}

export const LongName: Story = {
  args: {
    program: {
      id: '2',
      name: '時を超えるチケットと変わらない未来の謎',
      logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=2',
    },
  },
}

export const WithoutLogo: Story = {
  args: {
    program: {
      id: '3',
      name: 'ロゴのない企画',
      logoUrl: null,
    },
  },
}
