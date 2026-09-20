import { type FC, useState } from 'react'

import { IconCaretLeft, IconCaretRight } from '../../../../components/icons'
import { CarouselItem, type Program } from '../carousel-item/carousel-item'

import styles from './carousel.module.css'

type CarouselProps = {
  programs: Program[]
}

export const Carousel: FC<CarouselProps> = ({ programs }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!programs || programs.length === 0) {
    return null
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : programs.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < programs.length - 1 ? prev + 1 : 0))
  }

  const prevIndex = (currentIndex - 1 + programs.length) % programs.length
  const nextIndex = (currentIndex + 1) % programs.length

  return (
    <div className={styles.container}>
      <div className={styles.sideSlide}>
        <CarouselItem program={programs[prevIndex]!} isActive={false} />
      </div>

      <button
        type="button"
        onClick={handlePrev}
        className={styles.prevButton}
        aria-label="前の企画へ"
      >
        <span className={styles.iconWrapper}>
          <span className={styles.arrowShadowLeft}>
            <IconCaretLeft aria-hidden="true" />
          </span>
          <span className={styles.arrowMain}>
            <IconCaretLeft aria-hidden="true" />
          </span>
        </span>
      </button>

      <div className={styles.centerSlide}>
        <CarouselItem program={programs[currentIndex]!} isActive={true} />
      </div>

      <button
        type="button"
        onClick={handleNext}
        className={styles.nextButton}
        aria-label="次の企画へ"
      >
        <span className={styles.iconWrapper}>
          <span className={styles.arrowShadowRight}>
            <IconCaretRight aria-hidden="true" />
          </span>
          <span className={styles.arrowMain}>
            <IconCaretRight aria-hidden="true" />
          </span>
        </span>
      </button>

      <div className={styles.sideSlide}>
        <CarouselItem program={programs[nextIndex]!} isActive={false} />
      </div>
    </div>
  )
}
