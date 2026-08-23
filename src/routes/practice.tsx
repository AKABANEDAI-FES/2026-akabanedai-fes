import { createFileRoute } from '@tanstack/react-router'

import { ExampleTitle } from '../components/game1/example2'
import { ExampleGame } from '../components/game1/example2'

export const Route = createFileRoute('/practice')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ExampleTitle />
      <ExampleGame />
    </>
  )
}
