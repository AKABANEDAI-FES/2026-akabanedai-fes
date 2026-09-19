import { createLink } from '@tanstack/react-router'
import type { ComponentProps, FC } from 'react'

import { cn } from '../../utils/cn'

import styles from './link-button.module.css'

type LinkButtonBaseProps = ComponentProps<'a'> & {
  disabled?: boolean
}

const LinkButtonBase: FC<LinkButtonBaseProps> = ({
  className,
  disabled: _disabled,
  ...anchorProps
}) => <a className={cn(styles.link, className)} {...anchorProps} />

export const LinkButton = createLink(LinkButtonBase)
