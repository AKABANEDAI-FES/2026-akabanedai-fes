import type { FC } from 'react'

import styles from './tape.module.css'

export type TapeVariant = 'striped' | 'dark' | 'translucent'

const variantStyles = {
  striped: styles.striped,
  dark: styles.dark,
  translucent: styles.translucent,
} as const satisfies Record<TapeVariant, string>

type TapeProps = {
  variant: TapeVariant
  className?: string
}

export const Tape: FC<TapeProps> = ({ variant, className }) => (
  <span className={`${styles.tape} ${variantStyles[variant]} ${className ?? ''}`.trim()} />
)
