import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { IconMap } from '../icons'
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
    children: 'GoogleMap',
  },
}

export const WithIcon: Story = {
  args: {
    to: '/',
    children: (
      <>
        <IconMap className={styles.icon} aria-hidden="true" focusable="false" />
        GoogleMap
      </>
    ),
  },
}

export const Card: Story = {
  args: {
    to: '/',
    variant: 'card',
    className: styles.card,
    children: 'パンフレット',
  },
}

export const CardWithIcon: Story = {
  args: {
    to: '/',
    variant: 'card',
    className: styles.cardWithIcon,
    children: (
      <>
        <IconMap className={styles.cardIcon} aria-hidden="true" focusable="false" />
        パンフレット
      </>
    ),
  },
}
