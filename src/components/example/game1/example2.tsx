import styles from './example2.module.css'

export function Example2() {
  return (
    <div className={styles.container}>
      <h2>好きなゲーム紹介</h2>
      <h4>原神</h4>
      <p>推しキャラ</p>
      <ul>
        <li>アルレッキーノ</li>
        <li>ドットーレ</li>
        <li>ローエン</li>
      </ul>
    </div>
  )
}
