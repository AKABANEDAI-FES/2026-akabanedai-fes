import type { FC, ReactNode } from 'react'

import styles from './box.module.css'

type BoxProps = {
  children: ReactNode
  className?: string
}

export const Box: FC<BoxProps> = ({ children, className }) => {
  return <div className={className ? `${styles.box} ${className}` : styles.box}>{children}</div>
}
