import React, { ButtonHTMLAttributes } from 'react'
import * as Icon from 'react-icons/fa6'

import { FontAwesome6IconName } from 'Types/react-icons'
import {
  HeaderMenuListButton,
  HeaderMenuListItem,
  HeaderMenuListItemBadge,
  HeaderMenuListItemIconWrapper,
  HeaderMenuListItemLabel,
  HeaderMenuListLink
} from './styles'

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
  icon,
  ...props
}) => {
  const IconElement = typeof icon === 'string' ? Icon[icon] : React.Fragment

  // const buttonClickHandler: React.MouseEventHandler = event => {
  //   if (typeof props.onClick === 'function') {
  //     props.onClick(event)
  //   }
  // }

  const ButtonElement: ButtonElementComponent = ({ children }) => (
    <HeaderMenuListButton type="button" role="button" {...props}>
      {children}
    </HeaderMenuListButton>
  )

  const LinkElement: LinkElementComponent = ({ children }) => {
    return <HeaderMenuListLink href={href}>{children}</HeaderMenuListLink>
  }

  const WrapperElement = props.as === 'button' ? ButtonElement : LinkElement

  return (
    <HeaderMenuListItem>
      <WrapperElement>
        <HeaderMenuListItemIconWrapper>
          <IconElement />
        </HeaderMenuListItemIconWrapper>
        {props.label && (
          <HeaderMenuListItemLabel>{props.label}</HeaderMenuListItemLabel>
        )}
        {typeof props.count === 'number' && props.count >= 1 && (
          <HeaderMenuListItemBadge>{props.count}</HeaderMenuListItemBadge>
        )}
      </WrapperElement>
    </HeaderMenuListItem>
  )
}
