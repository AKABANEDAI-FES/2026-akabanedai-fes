import type { CSSProperties, FC } from 'react'

import styles from './stripe.module.css'

export type StripeColor = 'primary' | 'secondary' | 'accent'

type StripeProps = {
  length: string
  thickness: string
  from: StripeColor
  to: StripeColor
}

export const Stripe: FC<StripeProps> = ({ length, thickness, from, to }) => (
  <div
    className={styles.stripe}
    style={
      {
        width: length,
        height: thickness,
        '--stripe-from': `var(--color-${from})`,
        '--stripe-to': `var(--color-${to})`,
      } as CSSProperties
    }
  />
)
