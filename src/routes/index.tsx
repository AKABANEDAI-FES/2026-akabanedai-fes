import { createFileRoute } from '@tanstack/react-router'

import { FirstView } from './_components/first-view/first-view'
import { IntroBackground } from './_components/intro-background/intro-background'

export const Route = createFileRoute('/')({
  component: () => <IndexPage />,
})

const IndexPage = () => (
  <div>
    <IntroBackground>
      <FirstView />
    </IntroBackground>
  </div>
)
