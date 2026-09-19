import { createLink } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

import { cn } from '../../utils/cn'

import styles from './link-button.module.css'

type LinkButtonBaseProps = ComponentProps<'a'>

const LinkButtonBase = ({ className, ...anchorProps }: LinkButtonBaseProps) => (
  <a className={cn(styles.link, className)} {...anchorProps} />
)

export const LinkButton = createLink(LinkButtonBase)
