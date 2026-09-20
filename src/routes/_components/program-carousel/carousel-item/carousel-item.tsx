// src/routes/_components/program-carousel/carousel-item/carousel-item.tsx
import { Link } from '@tanstack/react-router'

import type { GetProjectsResponse } from '../../../../api/akabase'
import { IconChevronRight } from '../../../../components/icons'

import styles from './carousel-item.module.css'

type Project = GetProjectsResponse['projects'][number]

export type Program = Pick<Project, 'id' | 'name' | 'logoUrl'>

type Props = {
  program: Program
  isActive?: boolean
}

export const CarouselItem = ({ program, isActive = false }: Props) => {
  return (
    <Link
      to="/programs/$id"
      params={{ id: program.id }}
      className={`${styles.card} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.inner}>
        {/* 画像エリア（上部左右が斜めにカットされる形状） */}
        <div className={styles.imageContainer}>
          {program.logoUrl && (
            <img src={program.logoUrl} alt={program.name} className={styles.image} />
          )}
        </div>

        {/* 下部タイトルバー */}
        <div className={styles.footer}>
          <span className={styles.indicatorBar} />
          <p className={styles.title}>{program.name}</p>
          <span className={styles.arrow}>
            <IconChevronRight />
          </span>
        </div>
      </div>
    </Link>
  )
}
