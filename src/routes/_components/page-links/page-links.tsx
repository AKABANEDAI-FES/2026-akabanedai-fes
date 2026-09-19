import type { LinkProps } from '@tanstack/react-router'
import type { ComponentType, SVGProps } from 'react'

import { IconItemSearch, IconMap, IconTimetable, IconUser } from '../../../components/icons'
import { LinkButton } from '../../../components/link-button/link-button'

import styles from './page-links.module.css'

type PageLink = {
  label: string
  to: NonNullable<LinkProps['to']>
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const links = [
  { label: '企画一覧', to: '/programs', icon: IconItemSearch },
  { label: 'タイムテーブル', to: '/', icon: IconTimetable },
  { label: 'マイページ', to: '/', icon: IconUser },
  { label: 'パンフレット', to: '/', icon: IconMap },
] as const satisfies readonly PageLink[]

export const PageLinks = () => (
  <nav className={styles.links} aria-label="ページリンク">
    {links.map(({ label, to, icon: Icon }) => (
      <LinkButton key={label} to={to} className={styles.link}>
        <Icon className={styles.icon} aria-hidden="true" focusable="false" />
        {label}
      </LinkButton>
    ))}
  </nav>
)
