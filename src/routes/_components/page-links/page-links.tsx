import { IconItemSearch, IconMap, IconTimetable, IconUser } from '../../../components/icons'
import { LinkButton } from '../../../components/link-button/link-button'

import styles from './page-links.module.css'

const links = [
  { label: '企画一覧', href: '/programs', icon: IconItemSearch },
  { label: 'タイムテーブル', href: '/', icon: IconTimetable },
  { label: 'マイページ', href: '/', icon: IconUser },
  { label: 'パンフレット', href: '/', icon: IconMap },
] as const

export const PageLinks = () => (
  <nav className={styles.links} aria-label="ページリンク">
    {links.map(({ label, href, icon }) => (
      <LinkButton key={label} href={href} icon={icon}>
        {label}
      </LinkButton>
    ))}
  </nav>
)
