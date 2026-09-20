import { type FC, useState } from 'react'

import { IconCaretLeft, IconCaretRight } from '../../../../components/icons'
import { CarouselItem, type Program } from '../carousel-item/carousel-item'

import styles from './carousel.module.css'

type CarouselProps = {
  programs: Program[]
}

export const Carousel: FC<CarouselProps> = ({ programs }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const lastIndex = programs.length - 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? lastIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1))
  }

  const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1
  const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1

  const prevProgram = programs[prevIndex]
  const currentProgram = programs[currentIndex]
  const nextProgram = programs[nextIndex]

  return (
    <div className={styles.container}>
      {prevProgram !== undefined && (
        <div
          className={styles.sideSlide}
          role="group"
          aria-roledescription="スライド"
          aria-label={`${prevIndex + 1} / ${programs.length}`}
        >
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
        <div
          className={styles.centerSlide}
          role="group"
          aria-roledescription="スライド"
          aria-label={`${currentIndex + 1} / ${programs.length}`}
          aria-live="polite"
        >
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
        <div
          className={styles.sideSlide}
          role="group"
          aria-roledescription="スライド"
          aria-label={`${nextIndex + 1} / ${programs.length}`}
        >
          <CarouselItem program={nextProgram} isActive={false} />
        </div>
      )}
    </div>
  )
}
