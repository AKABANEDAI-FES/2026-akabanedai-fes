import { createLink } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

import styles from './link-button.module.css'

type LinkButtonBaseProps = ComponentProps<'a'>

const LinkButtonBase = ({ className, ...anchorProps }: LinkButtonBaseProps) => (
  <a className={[styles.link, className].filter(Boolean).join(' ')} {...anchorProps} />
)

export const LinkButton = createLink(LinkButtonBase)
