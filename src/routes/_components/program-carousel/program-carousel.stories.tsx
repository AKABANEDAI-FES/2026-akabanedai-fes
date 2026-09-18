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
        logoUrl: 'https://placehold.co/600x400?text=Fair',
        organization: { id: 'org-committee', name: '赤羽台祭実行委員' },
      },
      {
        id: '2',
        name: '人形劇',
        logoUrl: 'https://placehold.co/600x400?text=Puppet+Show',
        organization: { id: 'org-seminar', name: '子ども支援学科高橋健介ゼミ' },
      },
      {
        id: '3',
        name: '時を超えるチケットと変わらない未来の謎',
        logoUrl: 'https://placehold.co/600x400?text=Riddle',
        organization: { id: 'org-committee', name: '赤羽台祭実行委員' },
      },
      {
        id: '4',
        name: 'ダーツ企画',
        logoUrl: 'https://placehold.co/600x400?text=Darts',
        organization: { id: 'org-committee', name: '赤羽台祭実行委員' },
      },
      {
        id: '5',
        name: 'ARスタンプラリー',
        logoUrl: 'https://placehold.co/600x400?text=AR+Rally',
        organization: { id: 'org-committee', name: '赤羽台祭実行委員' },
      },
    ],
  },
}
