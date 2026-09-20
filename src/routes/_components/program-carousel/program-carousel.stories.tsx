import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { ProgramCarousel } from './program-carousel'

const meta: Meta<typeof ProgramCarousel> = {
  title: 'Routes/Components/ProgramCarousel',
  component: ProgramCarousel,
}

export default meta
type Story = StoryObj<typeof ProgramCarousel>

export const Default: Story = {
  args: {
    programs: [
      {
        id: '1',
        name: '縁日',
        logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=1',
      },
      {
        id: '2',
        name: '人形劇',
        logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=2',
      },
      {
        id: '3',
        name: '時を超えるチケットと変わらない未来の謎',
        logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=3',
      },
      {
        id: '4',
        name: 'ダーツ企画',
        logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=4',
      },
      {
        id: '5',
        name: 'ARスタンプラリー',
        logoUrl: 'https://placehold.jp/ababab/ffffff/600x400.png?text=5',
      },
    ],
  },
}
