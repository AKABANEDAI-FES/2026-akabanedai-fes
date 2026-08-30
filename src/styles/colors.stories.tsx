import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks'
import type { Meta, StoryObj } from '@storybook/tanstack-react'
import type { FC } from 'react'
import { ThemeProvider, ensure, themes } from 'storybook/theming'

const colors = {
  primary: 'メインカラー',
  secondary: 'アクセントカラー 1',
  accent: 'アクセントカラー 2',
  background: 'ページの背景',
  surface: 'カードなどの表面',
  foreground: '文字',
  border: '枠線',
}

const Colors: FC = () => (
  <ThemeProvider theme={ensure(themes.light)}>
    <ColorPalette>
      {Object.entries(colors).map(([name, description]) => (
        <ColorItem
          key={name}
          title={`--color-${name}`}
          subtitle={description}
          colors={[`var(--color-${name})`]}
        />
      ))}
    </ColorPalette>
  </ThemeProvider>
)

const meta = {
  title: 'Colors',
  component: Colors,
  tags: ['autodocs'],
} satisfies Meta<typeof Colors>

export default meta

type Story = StoryObj<typeof meta>

export const Palette: Story = {}
