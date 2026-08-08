import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import globalCssUrl from '../styles/global.css?url'
import styles from './__root.module.css'

const SITE_NAME = '赤羽台祭'
const SITE_TITLE = '赤羽台祭 [東洋大学赤羽台キャンパス大学祭]'
const SITE_DESCRIPTION =
  '東洋大学赤羽台キャンパス大学祭「赤羽台祭」は、2026/10/31(土), 11/01(日)に開催！'
const SITE_URL = 'https://akabanedai-fes.com/10'

type RootDocumentProps = {
  children: ReactNode
}

const RootDocument = ({ children }: RootDocumentProps) => (
  <html lang="ja">
    <head>
      <HeadContent />
    </head>
    <body>
      <div className={styles.root}>{children}</div>
      <Scripts />
    </body>
  </html>
)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE_NAME },
      { name: 'description', content: SITE_DESCRIPTION },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@akabanedaifes' },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
    ],
    links: [{ rel: 'stylesheet', href: globalCssUrl }],
  }),
  shellComponent: RootDocument,
})
