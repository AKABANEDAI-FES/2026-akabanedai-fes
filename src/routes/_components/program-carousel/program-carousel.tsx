import type { FC } from 'react'

import type { Program } from './carousel-item/carousel-item'
import { Carousel } from './carousel/carousel'

import styles from './program-carousel.module.css'

type ProgramCarouselProps = {
  programs: Program[]
}

export const ProgramCarousel: FC<ProgramCarouselProps> = ({ programs }) => (
  <section className={styles.carousel} aria-roledescription="カルーセル" aria-label="企画紹介">
    <Carousel programs={programs} />
  </section>
)
