/// <reference types="vite-plus/client" />
import type { Preview } from '@storybook/tanstack-react'

import '../src/styles/global.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
} satisfies Preview

export default preview
