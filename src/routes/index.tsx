import { createFileRoute } from '@tanstack/react-router'

import { CampusMap } from './_components/campus-map/campus-map'
import { PageLinks } from './_components/page-links/page-links'

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <h1>2026 赤羽台祭</h1>
      <PageLinks />
      <CampusMap />
    </main>
  ),
})
