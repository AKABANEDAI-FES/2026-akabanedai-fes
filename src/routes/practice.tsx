import { createFileRoute } from '@tanstack/react-router'

import { Sports } from '../components/sports/sports'

export const Route = createFileRoute('/practice')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <h1>スポーツ紹介ページ</h1>
      <Sports />
    </main>
  )
}
