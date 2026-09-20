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
      { id: '1', name: '縁日', logoUrl: 'https://placehold.co/600x400?text=Fair' },
      { id: '2', name: '人形劇', logoUrl: 'https://placehold.co/600x400?text=Puppet+Show' },
      {
        id: '3',
        name: '時を超えるチケットと変わらない未来の謎',
        logoUrl: 'https://placehold.co/600x400?text=Riddle',
      },
      { id: '4', name: 'ダーツ企画', logoUrl: 'https://placehold.co/600x400?text=Darts' },
      { id: '5', name: 'ARスタンプラリー', logoUrl: 'https://placehold.co/600x400?text=AR+Rally' },
    ],
  },
}
