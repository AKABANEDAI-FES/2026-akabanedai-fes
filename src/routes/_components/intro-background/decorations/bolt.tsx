import type { FC } from 'react'

import styles from './bolt.module.css'

type BoltProps = {
  size: string
}

export const Bolt: FC<BoltProps> = ({ size }) => (
  <div className={styles.bolt} style={{ width: size }} />
)
