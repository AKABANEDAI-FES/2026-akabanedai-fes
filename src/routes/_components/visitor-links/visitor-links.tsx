import WaveLeft from './decorations/wave-left.svg?react'
import WaveRight from './decorations/wave-right.svg?react'
import { LinkItem } from './link-item/link-item'

import styles from './visitor-links.module.css'

export const VisitorLinks = () => {
  return (
    <section className={styles.container} aria-label="ご来場の皆様へ">
      <WaveLeft className={styles.bgPatternLeft} preserveAspectRatio="none" aria-hidden="true" />
      <WaveRight className={styles.bgPatternRight} preserveAspectRatio="none" aria-hidden="true" />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <LinkItem href="/" text="ご来場の皆様へ" />
        </li>
        <li className={styles.listItem}>
          <LinkItem href="/" text="ご来場の際の注意点" />
        </li>
        <li className={styles.listItem}>
          <LinkItem href="/" text="よくあるご質問" />
        </li>
      </ul>
    </section>
  )
}
