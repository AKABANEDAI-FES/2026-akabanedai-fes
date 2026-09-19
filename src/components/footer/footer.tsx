import { IconBrandInstagram, IconBrandX } from '../icons'

import styles from './footer.module.css'

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

const SUPPORTERS = ['東洋大学', '東洋大学甫水会', '東洋大学校友会', '西赤羽商店街連合会'] as const

const CONTACT_EMAIL = 'support@akabanedai-fes.com'

type FooterProps = {
  sponsors?: readonly string[]
  supporters?: readonly string[]
  email?: string
  xUrl?: string
  instagramUrl?: string
  privacyPolicyUrl?: string
}

export function Footer({
  sponsors = SPONSORS,
  supporters = SUPPORTERS,
  email = CONTACT_EMAIL,
  xUrl = 'https://x.com/akabanedaifes/',
  instagramUrl = 'https://www.instagram.com/akabanedaifes/',
  privacyPolicyUrl = '/privacy-policy',
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.sponsors}>
          <h2 className={styles.heading}>協賛企業様</h2>
          <p className={styles.sponsorList}>
            {sponsors.map((sponsor) => (
              <span key={sponsor} className={styles.sponsorItem}>
                {sponsor}
              </span>
            ))}
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subHeading}>後援</h3>
          <p className={styles.text}>{supporters.join('/')}</p>
        </section>

        <section className={styles.section}>
          <p className={styles.text}>お問い合わせはこちら</p>
          <p className={styles.text}>
            <a className={styles.link} href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </section>

        <nav className={styles.social} aria-label="公式SNS">
          <a
            className={styles.socialLink}
            href={xUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="X（旧Twitter）"
          >
            <IconBrandX aria-hidden="true" focusable="false" />
          </a>
          <a
            className={styles.socialLink}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
          >
            <IconBrandInstagram aria-hidden="true" focusable="false" />
          </a>
        </nav>

        <p className={styles.text}>
          <a className={styles.link} href={privacyPolicyUrl}>
            プライバシーポリシー
          </a>
        </p>

        <p className={styles.copyright}>&copy;2026 東洋赤羽台祭実行委員会</p>
      </div>
    </footer>
  )
}

export default Footer
