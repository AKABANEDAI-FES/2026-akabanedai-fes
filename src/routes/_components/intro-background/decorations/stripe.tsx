import type { FC } from 'react'

import { cn } from '../../../../utils/cn'

import styles from './stripe.module.css'

export type StripeColor = 'primary' | 'secondary' | 'accent'

const fromStyles = {
  primary: styles.fromPrimary,
  secondary: styles.fromSecondary,
  accent: styles.fromAccent,
} as const satisfies Record<StripeColor, string>

const toStyles = {
  primary: styles.toPrimary,
  secondary: styles.toSecondary,
  accent: styles.toAccent,
} as const satisfies Record<StripeColor, string>

type StripeProps = {
  length: string
  thickness: string
  from: StripeColor
  to: StripeColor
}

export const Stripe: FC<StripeProps> = ({ length, thickness, from, to }) => (
  <div
    className={cn(styles.stripe, fromStyles[from], toStyles[to])}
    style={{ width: length, height: thickness }}
  />
)
