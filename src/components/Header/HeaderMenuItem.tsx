import Link from 'next/link'
import React, { ButtonHTMLAttributes } from 'react'
import * as Icon from 'react-icons/fa6'

import { FontAwesome6IconName } from 'Types/react-icons'

type HeaderMenuItemComponent = React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLElement> & {
    href?: string
    icon?: FontAwesome6IconName
    label?: string
    as?: 'button' | 'anchor'
    ref?: React.RefObject<HTMLButtonElement>
    count?: number
  }
>

type ButtonElementComponent = React.FunctionComponent<
  ButtonHTMLAttributes<HTMLButtonElement>
>

type LinkElementComponent = React.FunctionComponent<React.PropsWithChildren>

export const HeaderMenuItem: HeaderMenuItemComponent = ({
  href = '#',
  ...props
}) => {
  const IconElement =
    typeof props.icon === 'string' ? Icon[props.icon] : React.Fragment

  // const buttonClickHandler: React.MouseEventHandler = event => {
  //   if (typeof props.onClick === 'function') {
  //     props.onClick(event)
  //   }
  // }

  const ButtonElement: ButtonElementComponent = ({ children }) => (
    <button type="button" role="button" {...props}>
      {children}
    </button>
  )

  const LinkElement: LinkElementComponent = ({ children }) => {
    return <Link href={href}>{children}</Link>
  }

  const WrapperElement = props.as === 'button' ? ButtonElement : LinkElement

  return (
    <li>
      <WrapperElement>
        <i>
          <IconElement />
        </i>
        {props.label && <span>{props.label}</span>}
        {typeof props.count === 'number' && props.count >= 1 && (
          <strong>{props.count}</strong>
        )}
      </WrapperElement>
    </li>
  )
}
