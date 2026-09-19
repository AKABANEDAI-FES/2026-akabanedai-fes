import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

import { IconBrandInstagram, IconBrandX } from '../icons'

import styles from './footer.module.css'

// 協賛企業一覧は仮データ
const SPONSORS = [
  'アミカ　赤羽西口店',
  '株式会社カレッジヤード',
  'シャーメゾンショップ (有)喜屋',
  '株式会社　マエノ薬局',
  '誠和理研株式会社',
  '株式会社 総合資格',
  '瀧野川信用金庫　赤羽支店',
  '稲付・長右ヱ門商店',
  '稲付自治会',
  '城北信用金庫',
  '朝霞市商工会青年部',
  'ブックスページワン イトーヨーカドー赤羽店',
  '内田商店',
  '三忠食堂',
  'エンゼルステップ教室',
  '株式会社フォーシーズ',
  '赤羽アピレ',
  'ショッピングセンター ビビオ',
] as const

// 後援一覧は仮データ
const SUPPORTERS = ['東洋大学', '東洋大学甫水会', '東洋大学校友会', '西赤羽商店街連合会'] as const

const CONTACT_EMAIL = 'support@akabanedai-fes.com'

const X_URL = 'https://x.com/akabanedaifes/'

const INSTAGRAM_URL = 'https://www.instagram.com/akabanedaifes/'

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.section}>
        <h2 className={styles.heading}>協賛企業様</h2>
        <ul className={styles.nameList}>
          {SPONSORS.map((sponsor) => (
            <li key={sponsor} className={styles.nameItem}>
              {sponsor}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>後援</h2>
        <ul className={styles.nameList}>
          {SUPPORTERS.map((supporter) => (
            <li key={supporter} className={styles.nameItem}>
              {supporter}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subHeading}>お問い合わせはこちら</h2>
        <p className={styles.text}>
          <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      <nav className={styles.social} aria-label="公式SNS">
        <a
          className={styles.socialLink}
          href={X_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="X (旧 Twitter)"
        >
          <IconBrandX aria-hidden="true" focusable="false" />
        </a>
        <a
          className={styles.socialLink}
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
        >
          <IconBrandInstagram aria-hidden="true" focusable="false" />
        </a>
      </nav>

      <p className={styles.text}>
        <Link className={styles.link} to="/">
          プライバシーポリシー
        </Link>
      </p>

      <p className={styles.copyright}>©2026 東洋赤羽台祭実行委員会</p>
    </div>
  </footer>
)
