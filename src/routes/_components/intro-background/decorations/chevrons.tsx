import type { FC } from 'react'

import styles from './chevrons.module.css'

type ChevronsProps = {
  variant: 'filled' | 'outline'
  size: string
}

export const Chevrons: FC<ChevronsProps> = ({ variant, size }) => {
  const className = variant === 'filled' ? styles.filled : styles.outline

  return (
    <div className={styles.chevrons} style={{ width: size }}>
      <span className={className} />
      <span className={className} />
      <span className={className} />
    </div>
  )
}
