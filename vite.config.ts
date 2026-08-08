import { cloudflare } from '@cloudflare/vite-plugin'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  plugins: [
    devtools(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    viteReact(),
  ],
  staged: {
    '*': 'vp check --fix',
  },
  run: {
    tasks: {
      dev: {
        command: 'vp dev',
        cache: false,
      },
      build: {
        command: 'vp build',
      },
      deploy: {
        command: 'wrangler deploy',
        cache: false,
        dependsOn: ['build'],
      },
      'gen:types': {
        command: 'wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts',
        input: [{ auto: true }, '!cloudflare-env.d.ts'],
        output: ['cloudflare-env.d.ts'],
      },
    },
  },
  fmt: {
    ignorePatterns: ['cloudflare-env.d.ts', 'src/routeTree.gen.ts'],
    semi: false,
    singleQuote: true,
    sortImports: {},
  },
  lint: {
    ignorePatterns: ['cloudflare-env.d.ts', 'src/routeTree.gen.ts'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
