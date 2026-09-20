import { Link } from '@tanstack/react-router'

import styles from './link-item.module.css'

type LinkItemProps = {
  href: string
  text: string
}

export const LinkItem = ({ href, text }: LinkItemProps) => {
  return (
    <Link to={href} className={styles.link}>
      <span>{text}</span>
      <span className={styles.iconWrapper}>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
      </span>
    </Link>
  )
}
