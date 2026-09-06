import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_components/campus-map')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_components/campus-map"!</div>
}
