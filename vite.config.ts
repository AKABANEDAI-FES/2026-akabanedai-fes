import { existsSync } from 'node:fs'

import { cloudflare } from '@cloudflare/vite-plugin'
import { heyApiPlugin } from '@hey-api/vite-plugin'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { type Plugin, defineConfig, withFilter } from 'vite-plus'

const isStorybook = process.env.STORYBOOK === 'true'
const isVitest = process.env.VITEST === 'true'

/**
 * 生成される wrangler.json の `assets.directory` を `dist/client` に固定する
 *
 * Workers はリクエストパスと同じ相対パスの静的ファイルを配信するため、
 * base (`/10/`) 付きの配信ではファイルを `dist/client/10/` に置く必要があるが、
 * `@cloudflare/vite-plugin` は outDir をそのまま配信元にしてしまう (workers-sdk#9885)
 */
const workersAssetsRoot = (): Plugin => ({
  name: 'workers-assets-root',
  apply: 'build',
  applyToEnvironment: (environment) => environment.name === 'ssr',
  generateBundle: (_, bundle) => {
    const wranglerJson = bundle['wrangler.json']
    if (wranglerJson?.type !== 'asset') return
    if (typeof wranglerJson.source !== 'string') return

    const config = JSON.parse(wranglerJson.source)
    if (config.assets === undefined) return

    config.assets.directory = '../client'
    wranglerJson.source = JSON.stringify(config)
  },
})

export default defineConfig({
  base: '/10/',
  environments: {
    client: {
      build: {
        outDir: 'dist/client/10',
      },
    },
  },
  plugins: [
    heyApiPlugin({
      config: {
        input: 'https://akabase.akabanedai-fes.com/api/v1/openapi.json',
        output: 'src/api/akabase/generated',
        plugins: [
          {
            name: '@hey-api/client-fetch',
            runtimeConfigPath: './src/api/akabase/config.ts',
          },
        ],
      },
      vite: {
        apply: () => !existsSync('src/api/akabase/generated/index.ts'),
      },
    }),
    devtools(),
    withFilter(svgr(), { load: { id: /\.svg\?react$/ } }),
    tanstackStart(),
    viteReact(),
    ...(isStorybook || isVitest
      ? []
      : [cloudflare({ viteEnvironment: { name: 'ssr' } }), workersAssetsRoot()]),
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
      check: {
        command: '',
        dependsOn: ['check:oxc', 'check:stylelint'],
      },
      fix: {
        command: '',
        dependsOn: ['fix:oxc', 'fix:stylelint'],
      },
      test: {
        command: 'vp test',
      },
      'gen:types': {
        command: 'wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts',
        input: [{ auto: true }, '!cloudflare-env.d.ts'],
        output: ['cloudflare-env.d.ts'],
      },
      'gen:cmk': {
        command: 'cmk',
      },
      storybook: {
        command: 'storybook dev -p 6006 --no-open',
      },
      'storybook:build': {
        command: 'storybook build',
      },

      // internal tasks
      'check:oxc': {
        command: 'vp check',
      },
      'check:stylelint': {
        command: 'stylelint "src/**/*.css" --ignore-path .gitignore',
      },
      'fix:oxc': {
        command: 'vp check --fix',
      },
      'fix:stylelint': {
        command: 'stylelint "src/**/*.css" --ignore-path .gitignore --fix',
      },
    },
  },
  fmt: {
    ignorePatterns: ['cloudflare-env.d.ts', 'src/routeTree.gen.ts', 'src/api/akabase/generated/**'],
    semi: false,
    singleQuote: true,
    sortImports: {},
  },
  lint: {
    ignorePatterns: ['cloudflare-env.d.ts', 'src/routeTree.gen.ts', 'src/api/akabase/generated/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    passWithNoTests: true,
  },
})
