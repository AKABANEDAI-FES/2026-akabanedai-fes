import { Popover } from '@base-ui/react/popover'
import type { FC } from 'react'

import styles from './example.module.css'

type ExampleProps = {
  label: string
  title: string
  description: string
}

export const Example: FC<ExampleProps> = ({ label, title, description }) => (
  <Popover.Root>
    <Popover.Trigger className={styles.trigger}>{label}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Positioner sideOffset={8}>
        <Popover.Popup className={styles.popup}>
          <Popover.Title className={styles.title}>{title}</Popover.Title>
          <Popover.Description className={styles.description}>{description}</Popover.Description>
        </Popover.Popup>
      </Popover.Positioner>
    </Popover.Portal>
  </Popover.Root>
)
