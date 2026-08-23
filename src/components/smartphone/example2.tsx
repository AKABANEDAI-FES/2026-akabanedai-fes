import smartphoneImg2 from './StatCounter-vendor-JP-monthly-202507-202607.png'
import smartphoneImg from './StatCounter-vendor-ww-monthly-202507-202607.png'

import styles from './example2.module.css'
export function Example2() {
  return (
    <div className={styles.container}>
      <h2>世界スマートフォンシェア</h2>
      <img src={smartphoneImg} alt="スマートフォン画像" className={styles.image} />

      <h2>国内でのスマートフォンシェア</h2>
      <img src={smartphoneImg2} alt="スマートフォン画像" className={styles.image} />
      <p>
        国内でのスマートフォンシェアは昔はiPhone一強だったが、最近ではGalaxyやPixelなどのAndroid端末も人気が出てきている。
        最近のスマートフォンではGalaxyやPixelなどでAirDropのような機能が使えるようになってきている。今後は他のAndroid端末でもiPhoneのように簡単にデータを共有できるようになるかもしれない。
      </p>
    </div>
  )
}
