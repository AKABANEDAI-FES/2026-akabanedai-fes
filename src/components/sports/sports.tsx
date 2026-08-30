import Sports1 from './sports1.png'
import Sports2 from './sports2.png'

import styles from './sports.module.css'

export const Sports = () => {
  return (
    <div className={styles.container}>
      <h2>バレーボール</h2>
      <img src={Sports1} alt="volleyball" className={styles.image} />
      <h2>卓球</h2>
      <img src={Sports2} alt="tabletennis" className={styles.image} />
    </div>
  )
}
