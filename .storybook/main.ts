import type { StorybookConfig } from '@storybook/tanstack-react'

const config = {
  framework: '@storybook/tanstack-react',
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-vitest', '@storybook/addon-a11y', '@storybook/addon-docs'],
} satisfies StorybookConfig

export default config
