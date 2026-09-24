import { Typeset } from '@storybook/addon-docs/blocks'
import type { Meta, StoryObj } from '@storybook/tanstack-react'
import type { FC } from 'react'
import { ThemeProvider, ensure, themes } from 'storybook/theming'

const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']

const FontSizes: FC = () => (
  <ThemeProvider theme={ensure(themes.light)}>
    <Typeset
      fontSizes={fontSizes.map((name) => `var(--font-size-${name})`)}
      sampleText="赤羽台祭 2026"
    />
  </ThemeProvider>
)

const meta = {
  title: 'Font Sizes',
  component: FontSizes,
  tags: ['autodocs'],
} satisfies Meta<typeof FontSizes>

export default meta

type Story = StoryObj<typeof meta>

export const Scale: Story = {}
