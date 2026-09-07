import { createFileRoute } from '@tanstack/react-router'

import styles from './campus-map.module.css'

export const Route = createFileRoute('/_components/campus-map')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={styles.map}>Hello "/_components/campus-map"!</div>
}
