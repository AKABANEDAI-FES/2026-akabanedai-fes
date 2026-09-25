import type { FC, ReactNode } from 'react'

import { Box } from '../../../components/box'

import styles from './access-map.module.css'

type AccessMapProps = {
  title?: string
  mapImageSrc?: string
  mapImageAlt?: string
  description?: ReactNode
}

export const AccessMap: FC<AccessMapProps> = ({
  title = 'ACCESS',
  mapImageSrc = '/2026_アクセスマップ.svg',
  mapImageAlt = 'アクセスマップ',
  description,
}) => {
  const defaultDescription = (
    <>
      <p>
        <strong>電車をご利用の場合</strong>
      </p>
      <ul>
        <li>JR山手線「赤坂見附」西ロビ口より1094</li>
        <li>東京メトロ丸ノ内線・赤坂見附駅「赤坂溜池山王」2階出口徒歩125分</li>
      </ul>
      <p>
        <strong>バスをご利用の場合</strong>
      </p>
      <ul>
        <li>国際展覧バス</li>
        <li>「赤坂三丁目」バス停下車 徒歩約2分</li>
        <li>「法曹会館」バス停下車 徒歩約30分（正門まで約250m）</li>
      </ul>
      <p>
        <strong>ご来場について</strong>
      </p>
      <ul>
        <li>
          キャンパス内に来来用の駐車場はございませんので、駐車場は専用駐車場をご利用ください。
        </li>
        <li>駐輪場も数台限られているすでにご了承願います。</li>
      </ul>
    </>
  )

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.mapWrapper}>
          <img src={mapImageSrc} alt={mapImageAlt} className={styles.mapImage} />
        </div>
        <Box>
          <div className={styles.description}>{description || defaultDescription}</div>
        </Box>
      </div>
    </section>
  )
}
