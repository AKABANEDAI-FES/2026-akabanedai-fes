import styles from './tape.module.css'

export type TapeVariant = 'striped' | 'dark' | 'translucent'

const variantStyles: Record<TapeVariant, string | undefined> = {
  striped: styles.striped,
  dark: styles.dark,
  translucent: styles.translucent,
}

type TapeProps = {
  variant: TapeVariant
  className?: string
}

export function Tape({ variant, className }: TapeProps) {
  return <span className={`${styles.tape} ${variantStyles[variant]} ${className ?? ''}`.trim()} />
}
