import type { FC } from 'react'

import WaveLeftMobile from './decorations/wave-left-mobile.svg?react'
import WaveLeft from './decorations/wave-left.svg?react'
import WaveRightMobile from './decorations/wave-right-mobile.svg?react'
import WaveRight from './decorations/wave-right.svg?react'
import { LinkItem } from './link-item/link-item'

import styles from './visitor-links.module.css'

export const VisitorLinks: FC = () => (
  <section className={styles.container} aria-label="ご来場の皆様へ">
    <WaveLeft className={styles.waveLeft} aria-hidden="true" focusable="false" />
    <WaveRight className={styles.waveRight} aria-hidden="true" focusable="false" />
    <WaveLeftMobile className={styles.waveLeftMobile} aria-hidden="true" focusable="false" />
    <WaveRightMobile className={styles.waveRightMobile} aria-hidden="true" focusable="false" />
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <LinkItem to="/" text="ご来場の皆様へ" />
      </li>
      <li className={styles.listItem}>
        <LinkItem to="/" text="ご来場の際の注意点" />
      </li>
      <li className={styles.listItem}>
        <LinkItem to="/" text="よくあるご質問" />
      </li>
    </ul>
  </section>
)
