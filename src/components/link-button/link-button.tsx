import { Link } from '@tanstack/react-router'
import type { LinkProps } from '@tanstack/react-router'
import type { ComponentProps, ReactNode } from 'react'

import styles from './link-button.module.css'

type LinkButtonProps = Omit<ComponentProps<typeof Link>, 'children' | 'to'> & {
  to: NonNullable<LinkProps['to']>
  children: ReactNode
}

export const LinkButton = ({ children, className, ...linkProps }: LinkButtonProps) => (
  <Link className={[styles.link, className].filter(Boolean).join(' ')} {...linkProps}>
    {children}
  </Link>
)
