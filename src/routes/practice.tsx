import { createFileRoute } from '@tanstack/react-router'

import { Example2 } from '../components/smartphone/example2'

export const Route = createFileRoute('/practice')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/practice"!</div>
      <Example2 />
    </>
  )
}
