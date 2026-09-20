import { type FC, useState } from 'react'

import { IconCaretLeft, IconCaretRight } from '../../../../components/icons'
import { CarouselItem, type Program } from '../carousel-item/carousel-item'

import styles from './carousel.module.css'

type CarouselProps = {
  programs: Program[]
}

export const Carousel: FC<CarouselProps> = ({ programs }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (programs.length === 0) {
    return null
  }

  const lastIndex = programs.length - 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? lastIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1))
  }

  const prevProgram = programs[currentIndex === 0 ? lastIndex : currentIndex - 1]
  const currentProgram = programs[currentIndex]
  const nextProgram = programs[currentIndex === lastIndex ? 0 : currentIndex + 1]

  return (
    <div className={styles.container}>
      {prevProgram !== undefined && (
        <div className={styles.sideSlide}>
          <CarouselItem program={prevProgram} isActive={false} />
        </div>
      )}

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

      {currentProgram !== undefined && (
        <div className={styles.centerSlide}>
          <CarouselItem program={currentProgram} isActive={true} />
        </div>
      )}

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

      {nextProgram !== undefined && (
        <div className={styles.sideSlide}>
          <CarouselItem program={nextProgram} isActive={false} />
        </div>
      )}
    </div>
  )
}
