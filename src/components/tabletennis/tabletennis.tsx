import Tabletennis1 from './tabletennis_racket.png'

import styles from './tabletennis.module.css'
export const Sports = () => {
  return (
    <div className={styles.container}>
      <h2>卓球</h2>
      <p>コンポーネントの表示テスト</p>
      <img src={Tabletennis1} alt="卓球の画像" />
    </div>
  )
}
