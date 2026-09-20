import { LeftYellow, RightYellow } from '../../../components/icons'
import { LinkItem } from './link-item/link-item'

import styles from './visitor-links.module.css'

export const VisitorLinks = () => {
  return (
    <section className={styles.container} aria-label="ご来場の皆様へ">
      <LeftYellow className={styles.bgPatternLeft} preserveAspectRatio="none" aria-hidden="true" />
      <RightYellow
        className={styles.bgPatternRight}
        preserveAspectRatio="none"
        aria-hidden="true"
      />
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
