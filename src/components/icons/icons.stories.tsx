import type { Meta, StoryObj } from '@storybook/tanstack-react'
import type { FC } from 'react'

import {
  IconCaretLeft,
  IconCaretRight,
  IconChevronRight,
  IconItemSearch,
  IconMap,
  IconTimetable,
  IconUser,
} from './index'

import styles from './icons.stories.module.css'

const icons = {
  'caret-left': IconCaretLeft,
  'caret-right': IconCaretRight,
  'chevron-right': IconChevronRight,
  'item-search': IconItemSearch,
  map: IconMap,
  timetable: IconTimetable,
  user: IconUser,
}

type IconGalleryProps = {
  size: number
  color: string
  background: string
}

const IconGallery: FC<IconGalleryProps> = ({ size, color, background }) => (
  <ul className={styles.list} style={{ color, background }}>
    {Object.entries(icons).map(([name, Icon]) => (
      <li key={name} className={styles.item}>
        <Icon width={size} height={size} />
        <code className={styles.name}>{name}</code>
      </li>
    ))}
  </ul>
)

const meta = {
  title: 'Icons',
  component: IconGallery,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 128, step: 4 } },
    color: { control: 'color' },
    background: { control: 'color' },
  },
} satisfies Meta<typeof IconGallery>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 24,
    color: '#62d2f2',
    background: '#ffffff',
  },
}

export const Medium: Story = {
  args: {
    size: 48,
    color: '#62d2f2',
    background: '#ffffff',
  },
}

export const Large: Story = {
  args: {
    size: 96,
    color: '#62d2f2',
    background: '#ffffff',
  },
}
