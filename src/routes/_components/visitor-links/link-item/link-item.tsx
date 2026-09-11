import styles from './link-item.module.css'

type LinkItemProps = {
  href: string
  text: string
}

export const LinkItem = ({ href, text }: LinkItemProps) => {
  return (
    <a href={href} className={styles.link}>
      <span className={styles.text}>{text}</span>
      <span className={styles.iconWrapper}>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
      </span>
    </a>
  )
}
