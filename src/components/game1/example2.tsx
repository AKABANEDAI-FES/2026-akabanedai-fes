import APEX from './game1.jpg'
import 原神 from './game2.jpg'
import STARWARS1 from './game3.webp'
import STARWARS2 from './game4.webp'

import styles from './example2.module.css'

export function ExampleTitle() {
  return (
    <div className={styles.container}>
      <h2>好きなゲーム紹介</h2>
      <p>以下に好きなゲームのタイトルとその画像を貼ります</p>
    </div>
  )
}

export function ExampleGame() {
  return (
    <div>
      <h3>APEX</h3>
      <p>FPS最高！</p>
      <img src={APEX} alt="Game1" className={styles.img} />
      <h3>原神</h3>
      <p>サンドローネ最高！</p>
      <img src={原神} alt="Game2" className={styles.img} />
      <h3>買ったけどやれてないゲーム🥲</h3>
      <p>JEDI FALLEN ORDER</p>
      <img src={STARWARS1} alt="Game2" className={styles.img} />
      <p>JEDI SURVIVOR</p>
      <img src={STARWARS2} alt="Game2" className={styles.img} />
    </div>
  )
}
