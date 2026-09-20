// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/')({
//   component: () => <h1>2026 赤羽台祭</h1>,
// })

import { createFileRoute } from '@tanstack/react-router'

import { VisitorLinks } from './_components/visitor-links/visitor-links'

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <h1>2026 赤羽台祭</h1>
      <VisitorLinks />
    </main>
  ),
})
