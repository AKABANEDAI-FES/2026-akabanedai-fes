import { createFileRoute } from '@tanstack/react-router'

import { PageLinks } from './_components/page-links/page-links'

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <h1>2026 赤羽台祭</h1>
      <PageLinks />
    </main>
  ),
})
