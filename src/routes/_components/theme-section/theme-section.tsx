import { type FC, useId } from 'react'

import logo from './logo.png'

import styles from './theme-section.module.css'

export const ThemeSection: FC = () => {
  const headingId = useId()

  return (
    <section className={styles.themeSection} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <h2 id={headingId} className={styles.heading}>
          Theme
        </h2>
        <div className={styles.body}>
          <div className={styles.card}>
            <p className={styles.name}>
              <span className={styles.line}>Hello</span>{' '}
              <span className={styles.line}>Next Stage</span>
            </p>
            <img src={logo} alt="" width={1061} height={353} className={styles.logo} />
          </div>
          <p className={styles.tagline}>
            <span className={styles.segment}>
              加速<span className={styles.kana}>する</span>未来、
            </span>
            <span className={styles.segment}>
              <span className={styles.kana}>ここが</span>最前線
            </span>
            <span className={styles.chevrons} aria-hidden="true">
              <span className={styles.chevron} />
              <span className={styles.chevron} />
              <span className={styles.chevron} />
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
