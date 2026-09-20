import type { FC } from 'react'

import type { Program } from './carousel-item/carousel-item'
import { Carousel } from './carousel/carousel'

type ProgramCarouselProps = {
  programs: Program[]
}

export const ProgramCarousel: FC<ProgramCarouselProps> = ({ programs }) => (
  <section>
    <Carousel programs={programs} />
  </section>
)
