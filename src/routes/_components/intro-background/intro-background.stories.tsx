import type { Meta, StoryObj } from '@storybook/tanstack-react'

import { FirstView } from '../first-view/first-view'
import { IntroBackground } from './intro-background'

const meta = {
  title: 'Routes/IntroBackground',
  component: IntroBackground,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: <div style={{ height: '125vw' }} />,
  },
} satisfies Meta<typeof IntroBackground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithFirstView: Story = {
  args: {
    children: (
      <>
        <FirstView />
        <div style={{ height: '100svh' }} />
      </>
    ),
  },
}
