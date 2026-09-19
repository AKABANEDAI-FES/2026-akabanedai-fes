import { Link } from '@tanstack/react-router'
import type { LinkProps } from '@tanstack/react-router'
import type { ComponentProps, ComponentType, ReactNode, SVGProps } from 'react'

import styles from './link-button.module.css'

type LinkButtonProps = Omit<ComponentProps<typeof Link>, 'children' | 'to'> & {
  to: NonNullable<LinkProps['to']>
  children: ReactNode
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const LinkButton = ({ children, icon: Icon, className, ...linkProps }: LinkButtonProps) => (
  <Link className={[styles.link, className].filter(Boolean).join(' ')} {...linkProps}>
    <Icon className={styles.icon} width={24} height={24} aria-hidden="true" />
    <span>{children}</span>
  </Link>
)
