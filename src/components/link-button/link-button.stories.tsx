import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { IconItemSearch } from '../icons'
import { LinkButton } from './link-button'

import styles from './link-button.stories.module.css'

const meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    to: '/',
    className: styles.link,
    children: (
      <>
        <IconItemSearch className={styles.icon} aria-hidden="true" focusable="false" />
        企画一覧
      </>
    ),
  },
}
