import { createFileRoute } from '@tanstack/react-router'

import { Sports } from '../components/tabletennis/tabletennis'

export const Route = createFileRoute('/practice')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <h1>Practice ページ</h1>
      <Sports />
    </main>
  )
}
