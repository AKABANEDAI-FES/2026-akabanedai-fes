import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { SectionTitle } from './section-title'

const meta = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'セクションのタイトルテキスト',
    },
    className: {
      control: 'text',
      description: '追加の CSS クラス名',
    },
  },
} satisfies Meta<typeof SectionTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'セクションタイトル',
  },
}

export const WithCustomClass: Story = {
  args: {
    title: 'カスタムクラス付きタイトル',
    className: 'custom-title',
  },
}

export const LongTitle: Story = {
  args: {
    title: 'これは長めのセクションタイトルの例です。複数行に渡るようなタイトルも表示できます。',
  },
}
