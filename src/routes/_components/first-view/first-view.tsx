import type { FC } from 'react'

import title from './title.svg'

import styles from './first-view.module.css'

export const FirstView: FC = () => (
  <section className={styles.firstView}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <span className={styles.edition}>第10回</span>
        <img src={title} alt="赤羽台祭" width={703} height={171} className={styles.logo} />
      </h1>
      <p className={styles.schedule}>
        <span>
          <time dateTime="2026-10-31">10/31(土)</time>-<time dateTime="2026-11-01">11/1(日)</time>
        </span>
        <span>
          <span className={styles.segment}>
            <time dateTime="10:00">10:00</time>-<time dateTime="18:00">18:00</time>
          </span>
          <span className={styles.segment}>(17:30最終受付)</span>
        </span>
      </p>
    </div>
  </section>
)
