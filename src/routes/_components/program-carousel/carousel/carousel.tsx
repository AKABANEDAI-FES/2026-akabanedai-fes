// src/routes/_components/program-carousel/carousel/carousel.tsx
import { type FC, useState } from 'react'

import { IconCaretLeft, IconCaretRight } from '../../../../components/icons'
import { cn } from '../../../../utils/cn'
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
      {/* 左スライド */}
      <div className={cn(styles.slide, styles.sideSlide)}>
        <CarouselItem program={programs[prevIndex]!} isActive={false} />
      </div>

      {/* 左ナビゲーション矢印 */}
      <button
        type="button"
        onClick={handlePrev}
        className={cn(styles.navButton, styles.prevButton)}
        aria-label="前の企画へ"
      >
        <span className={styles.iconWrapper}>
          {/* 水色の下敷き影 */}
          <span className={cn(styles.arrowShadow, styles.arrowShadowLeft)}>
            <IconCaretLeft />
          </span>
          {/* メインのオレンジ矢印 */}
          <span className={styles.arrowMain}>
            <IconCaretLeft />
          </span>
        </span>
      </button>

      {/* 中央スライド */}
      <div className={cn(styles.slide, styles.centerSlide)}>
        <CarouselItem program={programs[currentIndex]!} isActive={true} />
      </div>

      {/* 右ナビゲーション矢印 */}
      <button
        type="button"
        onClick={handleNext}
        className={cn(styles.navButton, styles.nextButton)}
        aria-label="次の企画へ"
      >
        <span className={styles.iconWrapper}>
          {/* 水色の下敷き影 */}
          <span className={cn(styles.arrowShadow, styles.arrowShadowRight)}>
            <IconCaretRight />
          </span>
          {/* メインのオレンジ矢印 */}
          <span className={styles.arrowMain}>
            <IconCaretRight />
          </span>
        </span>
      </button>

      {/* 右スライド */}
      <div className={cn(styles.slide, styles.sideSlide)}>
        <CarouselItem program={programs[nextIndex]!} isActive={false} />
      </div>
    </div>
  )
}
