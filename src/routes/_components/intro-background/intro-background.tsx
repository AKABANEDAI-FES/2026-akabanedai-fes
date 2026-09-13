import type { FC, ReactNode } from 'react'

import { Arrow } from './decorations/arrow'
import { Bolt } from './decorations/bolt'
import { Chevrons } from './decorations/chevrons'
import { Stripe } from './decorations/stripe'

import styles from './intro-background.module.css'

type IntroBackgroundProps = {
  children: ReactNode
}

export const IntroBackground: FC<IntroBackgroundProps> = ({ children }) => (
  <div className={styles.introBackground}>
    <div className={styles.decorations} aria-hidden="true">
      <div className={styles.layerBack}>
        <div style={{ top: '6cqw', left: '-3cqw' }}>
          <Stripe length="28cqw" thickness="2cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '6cqw', left: '47cqw' }}>
          <Stripe length="26cqw" thickness="2cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '6cqw', left: '54cqw' }}>
          <Stripe length="26cqw" thickness="2cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '30cqw', left: '84cqw' }}>
          <Stripe length="22cqw" thickness="2cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '47cqw', left: '68cqw' }}>
          <Stripe length="42cqw" thickness="4cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '85cqw', left: '-22cqw' }}>
          <Stripe length="50cqw" thickness="2cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '117cqw', left: '-17cqw' }}>
          <Stripe length="36cqw" thickness="1.5cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '94cqw', left: '57cqw' }}>
          <Stripe length="56cqw" thickness="2cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '54cqw', left: '-26cqw' }}>
          <Stripe length="26cqw" thickness="2cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '130cqw', left: '31cqw' }}>
          <Stripe length="26cqw" thickness="2cqw" from="secondary" to="primary" />
        </div>
      </div>
      <div className={styles.layerMiddle}>
        <div style={{ top: '4cqw', left: '36cqw' }}>
          <Bolt size="18cqw" />
        </div>
        <div style={{ top: '37cqw', left: '19cqw' }}>
          <Bolt size="18cqw" />
        </div>
        <div style={{ top: '91cqw', left: '-3cqw' }}>
          <Bolt size="17cqw" />
        </div>
        <div style={{ top: '76cqw', left: '71cqw' }}>
          <Bolt size="17cqw" />
        </div>
        <div style={{ top: '32cqw', left: '-7cqw' }}>
          <Arrow size="19cqw" />
        </div>
        <div style={{ top: '62cqw', left: '63cqw' }}>
          <Arrow size="8cqw" />
        </div>
        <div style={{ top: '59cqw', left: '-24cqw' }}>
          <Bolt size="17cqw" />
        </div>
        <div style={{ top: '120cqw', left: '12cqw' }}>
          <Bolt size="17cqw" />
        </div>
        <div style={{ top: '133cqw', left: '-5cqw' }}>
          <Arrow size="12cqw" />
        </div>
      </div>
      <div className={styles.layerFront}>
        <div style={{ top: '-5cqw', left: '17cqw' }}>
          <Chevrons variant="filled" size="31cqw" />
        </div>
        <div style={{ top: '27cqw', left: '-11cqw' }}>
          <Chevrons variant="outline" size="47cqw" />
        </div>
        <div style={{ top: '95cqw', left: '6cqw' }}>
          <Chevrons variant="filled" size="31cqw" />
        </div>
        <div style={{ top: '64cqw', left: '-41cqw' }}>
          <Chevrons variant="filled" size="31cqw" />
        </div>
        <div style={{ top: '146cqw', left: '25cqw' }}>
          <Chevrons variant="outline" size="36cqw" />
        </div>
      </div>
    </div>
    {children}
  </div>
)
