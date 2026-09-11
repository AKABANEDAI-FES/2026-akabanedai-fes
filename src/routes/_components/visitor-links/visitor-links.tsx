import { LinkItem } from './link-item/link-item'

import styles from './visitor-links.module.css'

export const VisitorLinks = () => {
  const links = [
    { text: 'ご来場の皆様へ', href: '/' },
    { text: 'ご来場の際の注意点', href: '/' },
    { text: 'よくあるご質問', href: '/' },
  ]

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.listItem}>
            <LinkItem href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
    </section>
  )
}
