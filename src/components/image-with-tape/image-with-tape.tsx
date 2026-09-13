import type { ImgHTMLAttributes } from 'react'

import { Tape, type TapeVariant } from './tape/tape'

import styles from './image-with-tape.module.css'

type ImageWithTapeProps = {
  alt: string
  src: string
  className?: string
  tapeVariants?: {
    topLeft?: TapeVariant
    bottomRightBack?: TapeVariant
    bottomRightFront?: TapeVariant
  }
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'className' | 'src'>

export function ImageWithTape({
  alt,
  src,
  className,
  tapeVariants = {},
  ...imageProps
}: ImageWithTapeProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`.trim()}>
      <img className={styles.image} src={src} alt={alt} {...imageProps} />
      <Tape
        className={[styles.commonTape, styles.topLeftTape].join(' ')}
        variant={tapeVariants.topLeft ?? 'striped'}
        aria-hidden="true"
      />
      <Tape
        className={[styles.commonTape, styles.bottomRightBackTape].join(' ')}
        variant={tapeVariants.bottomRightBack ?? 'dark'}
        aria-hidden="true"
      />
      <Tape
        className={[styles.commonTape, styles.bottomRightFrontTape].join(' ')}
        variant={tapeVariants.bottomRightFront ?? 'translucent'}
        aria-hidden="true"
      />
    </div>
  )
}
