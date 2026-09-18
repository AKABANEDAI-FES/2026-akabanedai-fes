import type { Program } from './carousel-item/carousel-item'
import { Carousel } from './carousel/carousel'

type Props = {
  programs: Program[]
}

export const ProgramCarousel = ({ programs }: Props) => {
  return (
    <section>
      <Carousel programs={programs} />
    </section>
  )
}
