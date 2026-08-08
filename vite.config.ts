import { cloudflare } from '@cloudflare/vite-plugin'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { type Plugin, defineConfig } from 'vite-plus'

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
    devtools(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    viteReact(),
    workersAssetsRoot(),
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
