import type { FC } from 'react'

import styles from './arrow.module.css'

type ArrowProps = {
  size: string
}

export const Arrow: FC<ArrowProps> = ({ size }) => (
  <div className={styles.arrow} style={{ width: size }} />
)
