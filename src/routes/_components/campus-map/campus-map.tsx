import type { FC } from 'react'

import { ImageWithTape } from '../../../components/image-with-tape/image-with-tape'

import styles from './campus-map.module.css'

const campusMapImage =
  'https://placehold.jp/ababab/ffffff/1600x900.png?text=%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9%E3%83%9E%E3%83%83%E3%83%97'

export const CampusMap: FC = () => (
  <section className={styles.map}>
    <ImageWithTape
      src={campusMapImage}
      alt="赤羽台祭のキャンパスマップ"
      width={1600}
      height={900}
      loading="lazy"
      decoding="async"
    />
  </section>
)
