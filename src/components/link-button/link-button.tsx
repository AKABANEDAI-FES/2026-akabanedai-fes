import { Link } from '@tanstack/react-router'
import type { LinkProps } from '@tanstack/react-router'
import type { ComponentType, ReactNode, SVGProps } from 'react'

import styles from './link-button.module.css'

type LinkButtonProps = {
  to: NonNullable<LinkProps['to']>
  children: ReactNode
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
}

export const LinkButton = ({ to, children, icon: Icon, className }: LinkButtonProps) => (
  <Link className={[styles.link, className].filter(Boolean).join(' ')} to={to}>
    <Icon className={styles.icon} width={24} height={24} aria-hidden="true" />
    <span>{children}</span>
  </Link>
)
