import { Link } from '@tanstack/react-router'
import type { LinkProps } from '@tanstack/react-router'

import styles from './link-item.module.css'

type LinkItemProps = {
  to: NonNullable<LinkProps['to']>
  text: string
}

export const LinkItem = ({ to, text }: LinkItemProps) => {
  return (
    <Link to={to} className={styles.link}>
      <span>{text}</span>
      <span className={styles.iconWrapper}>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
      </span>
    </Link>
  )
}
