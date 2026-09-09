import type { ComponentType, ReactNode, SVGProps } from 'react'

import styles from './link-button.module.css'

type LinkButtonProps = {
  href: string
  children: ReactNode
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
}

export const LinkButton = ({ href, children, icon: Icon, className }: LinkButtonProps) => (
  <a className={[styles.link, className].filter(Boolean).join(' ')} href={href}>
    <Icon className={styles.icon} width={24} height={24} aria-hidden="true" />
    <span>{children}</span>
  </a>
)
