import type { FC } from 'react'

import styles from './section-title.module.css'

type SectionTitleProps = {
  title: string
  className?: string
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return <h2 className={className ? `${styles.title} ${className}` : styles.title}>{title}</h2>
}
