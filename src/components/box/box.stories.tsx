import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { Box } from './box'

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ボックスの内容',
    },
    className: {
      control: 'text',
      description: '追加の CSS クラス名',
    },
  },
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'これは装飾付きボックスの例です。',
  },
}

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <p>
          <strong>ボックスの内容</strong>
        </p>
        <p>
          このボックスには複雑な HTML
          コンテンツを含めることができます。アクセスマップなどのセクション内で使用できます。
        </p>
      </div>
    ),
  },
}

export const WithCustomClass: Story = {
  args: {
    children: 'カスタムクラス付きボックス',
    className: 'custom-box',
  },
}

export const Information: Story = {
  args: {
    children: (
      <div>
        <p>
          <strong>📍 会場情報</strong>
        </p>
        <p>〒123-4567 東京都渋谷区</p>
        <p>電車：JR山手線「渋谷駅」より徒歩10分</p>
      </div>
    ),
  },
}
