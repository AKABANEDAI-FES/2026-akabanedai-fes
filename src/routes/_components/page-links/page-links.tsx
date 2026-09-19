import { IconItemSearch, IconMap, IconTimetable, IconUser } from '../../../components/icons'
import { LinkButton } from '../../../components/link-button/link-button'

import styles from './page-links.module.css'

const links = [
  { label: '企画一覧', to: '/programs', icon: IconItemSearch },
  { label: 'タイムテーブル', to: '/', icon: IconTimetable },
  { label: 'マイページ', to: '/', icon: IconUser },
  { label: 'パンフレット', to: '/', icon: IconMap },
] as const

export const PageLinks = () => (
  <nav className={styles.links} aria-label="ページリンク">
    {links.map(({ label, to, icon }) => (
      <LinkButton key={label} to={to} icon={icon}>
        {label}
      </LinkButton>
    ))}
  </nav>
)
