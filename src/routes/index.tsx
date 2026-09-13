import { createFileRoute } from '@tanstack/react-router'

import { CampusMap } from './_components/campus-map/campus-map'
export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <h1>2026 赤羽台祭</h1>
      <CampusMap />
    </main>
  ),
})
