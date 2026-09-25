import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { AccessMap } from './access-map'

const meta = {
  title: 'Components/AccessMap',
  component: AccessMap,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'セクションのタイトル',
    },
    mapImageSrc: {
      control: 'text',
      description: 'マップ画像のソース',
    },
    mapImageAlt: {
      control: 'text',
      description: 'マップ画像の代替テキスト',
    },
    description: {
      control: 'text',
      description: '説明テキスト',
    },
  },
} satisfies Meta<typeof AccessMap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'アクセスマップ',
    mapImageSrc: 'https://via.placeholder.com/400x400?text=Map',
    mapImageAlt: 'アクセスマップ',
    description:
      '〒123-4567 東京都渋谷区\n\n会場までのアクセス方法についての詳しい情報が入ります。電車やバス、車でのアクセス方法を記載してください。',
  },
}

export const CustomContent: Story = {
  args: {
    title: 'イベント会場への行き方',
    mapImageSrc: 'https://via.placeholder.com/400x400?text=Event+Location',
    mapImageAlt: 'イベント会場マップ',
    description:
      '【最寄駅】\nJR山手線「渋谷駅」より徒歩10分\n\n【駐車場】\n会場周辺に有料駐車場があります。ご利用ください。\n\n【その他】\nアクセス方法に関するご質問は、サポートまでお問い合わせください。',
  },
}

export const ShortDescription: Story = {
  args: {
    title: 'Access Map',
    mapImageSrc: 'https://via.placeholder.com/400x400?text=Location',
    mapImageAlt: 'Location Map',
    description: '会場の場所はこちらです。',
  },
}
