import type { FC, ImgHTMLAttributes } from 'react'

import { cn } from '../../utils/cn'
import { Tape } from './tape/tape'

import styles from './image-with-tape.module.css'

type ImageWithTapeProps = {
  alt: string
  src: string
  className?: string
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'className' | 'src'>

export const ImageWithTape: FC<ImageWithTapeProps> = ({ alt, src, className, ...imageProps }) => (
  <div className={cn(styles.wrapper, className)}>
    <img className={styles.image} src={src} alt={alt} {...imageProps} />
    <Tape className={styles.topLeftTape} variant="striped" />
    <Tape className={styles.bottomRightBackTape} variant="dark" />
    <Tape className={styles.bottomRightFrontTape} variant="translucent" />
  </div>
)
