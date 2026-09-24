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
    <div className={styles.desktopDecorations} aria-hidden="true">
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
    <div className={styles.mobileDecorations} aria-hidden="true">
      <div className={styles.layerBack}>
        <div style={{ top: '9cqw', left: '4cqw' }}>
          <Stripe length="26cqw" thickness="3cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '-12cqw', left: '20cqw' }}>
          <Stripe length="45cqw" thickness="5cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '12cqw', left: '64cqw' }}>
          <Stripe length="48cqw" thickness="9cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '56cqw', left: '64cqw' }}>
          <Stripe length="41cqw" thickness="7cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '102cqw', left: '54cqw' }}>
          <Stripe length="62cqw" thickness="11cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '170cqw', left: '-13cqw' }}>
          <Stripe length="40cqw" thickness="5cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '280cqw', left: '67cqw' }}>
          <Stripe length="50cqw" thickness="8cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '258cqw', left: '-35cqw' }}>
          <Stripe length="40cqw" thickness="4cqw" from="secondary" to="primary" />
        </div>
        <div style={{ top: '344cqw', left: '-40cqw' }}>
          <Stripe length="30cqw" thickness="3cqw" from="secondary" to="accent" />
        </div>
        <div style={{ top: '369cqw', left: '8cqw' }}>
          <Stripe length="45cqw" thickness="6cqw" from="secondary" to="accent" />
        </div>
      </div>
      <div className={styles.layerMiddle}>
        <div style={{ top: '18cqw', left: '48cqw' }}>
          <Bolt size="28cqw" />
        </div>
        <div style={{ top: '89cqw', left: '30cqw' }}>
          <Bolt size="33cqw" />
        </div>
        <div style={{ top: '146cqw', left: '2cqw' }}>
          <Arrow size="20cqw" />
        </div>
        <div style={{ top: '194cqw', left: '84cqw' }}>
          <Bolt size="26cqw" />
        </div>
        <div style={{ top: '254cqw', left: '8cqw' }}>
          <Bolt size="26cqw" />
        </div>
        <div style={{ top: '224cqw', left: '-43cqw' }}>
          <Bolt size="26cqw" />
        </div>
        <div style={{ top: '292cqw', left: '-53cqw' }}>
          <Arrow size="16cqw" />
        </div>
        <div style={{ top: '382cqw', left: '-35cqw' }}>
          <Bolt size="30cqw" />
        </div>
        <div style={{ top: '414cqw', left: '-83cqw' }}>
          <Bolt size="26cqw" />
        </div>
      </div>
      <div className={styles.layerFront}>
        <div style={{ top: '4cqw', left: '5cqw' }}>
          <Chevrons variant="filled" size="62cqw" />
        </div>
        <div style={{ top: '83cqw', left: '-4cqw' }}>
          <Chevrons variant="outline" size="76cqw" />
        </div>
        <div style={{ top: '233cqw', left: '-72cqw' }}>
          <Chevrons variant="filled" size="55cqw" />
        </div>
        <div style={{ top: '358cqw', left: '-95cqw' }}>
          <Chevrons variant="outline" size="70cqw" />
        </div>
        <div style={{ top: '404cqw', left: '-15cqw' }}>
          <Chevrons variant="outline" size="50cqw" />
        </div>
        <div style={{ top: '443cqw', left: '-122cqw' }}>
          <Chevrons variant="filled" size="55cqw" />
        </div>
      </div>
    </div>
    {children}
  </div>
)
