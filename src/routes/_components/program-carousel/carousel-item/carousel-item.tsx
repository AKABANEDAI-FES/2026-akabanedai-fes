import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

import type { GetProjectsResponse } from '../../../../api/akabase'
import { IconChevronRight } from '../../../../components/icons'
import { cn } from '../../../../utils/cn'

import styles from './carousel-item.module.css'

type Project = GetProjectsResponse['projects'][number]

export type Program = Pick<Project, 'id' | 'name' | 'logoUrl'>

type CarouselItemProps = {
  program: Program
  isActive?: boolean
}

export const CarouselItem: FC<CarouselItemProps> = ({ program, isActive = false }) => (
  <Link
    to="/programs/$id"
    params={{ id: program.id }}
    className={cn(styles.card, isActive && styles.active)}
  >
    <div className={styles.inner}>
      <div className={styles.imageContainer}>
        {program.logoUrl !== null && (
          <img
            src={program.logoUrl}
            alt=""
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className={styles.footer}>
        <span className={styles.indicatorBar} />
        <p className={styles.title}>{program.name}</p>
        <span className={styles.arrow}>
          <IconChevronRight aria-hidden="true" />
        </span>
      </div>
    </div>
  </Link>
)
