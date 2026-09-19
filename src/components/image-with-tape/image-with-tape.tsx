import type { FC, ImgHTMLAttributes } from 'react'

import { cn } from '../../utils/cn'
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

export const ImageWithTape: FC<ImageWithTapeProps> = ({
  alt,
  src,
  className,
  tapeVariants = {},
  ...imageProps
}) => (
  <div className={cn(styles.wrapper, className)}>
    <img className={styles.image} src={src} alt={alt} {...imageProps} />
    <Tape className={styles.topLeftTape} variant={tapeVariants.topLeft ?? 'striped'} />
    <Tape className={styles.bottomRightBackTape} variant={tapeVariants.bottomRightBack ?? 'dark'} />
    <Tape
      className={styles.bottomRightFrontTape}
      variant={tapeVariants.bottomRightFront ?? 'translucent'}
    />
  </div>
)
