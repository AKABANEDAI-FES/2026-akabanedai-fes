import { createFileRoute } from '@tanstack/react-router'

import { FirstView } from './_components/first-view/first-view'

export const Route = createFileRoute('/')({
  component: () => <IndexPage />,
})

const IndexPage = () => (
  <div>
    <FirstView />
  </div>
)
