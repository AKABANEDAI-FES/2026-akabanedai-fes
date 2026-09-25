import { createLink } from '@tanstack/react-router'
import type { ComponentProps, FC } from 'react'

import { cn } from '../../utils/cn'

import styles from './link-button.module.css'

export type LinkButtonVariant = 'button' | 'card'

const variantStyles = {
  button: styles.button ?? '',
  card: styles.card ?? '',
} as const satisfies Record<LinkButtonVariant, string>

type LinkButtonBaseProps = ComponentProps<'a'> & {
  variant?: LinkButtonVariant
}

const LinkButtonBase: FC<LinkButtonBaseProps> = ({
  variant = 'button',
  className,
  ...anchorProps
}) => <a className={cn(variantStyles[variant], className)} {...anchorProps} />

export const LinkButton = createLink(LinkButtonBase)
