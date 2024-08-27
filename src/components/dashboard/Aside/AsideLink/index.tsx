import Link from 'next/link'
import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import * as Icons from 'react-icons/fa6'

import { FontAwesome6IconName } from 'Types/react-icons'

import { Body, Container, IconWrapper, Label, List } from './styles'

type AsideLinkProps = {
  icon?: FontAwesome6IconName
  showSubList?: boolean
  href?: string
  label: string
}

type ButtonElementProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement>
>

type AsideLinkComponent = FunctionComponent<PropsWithChildren & AsideLinkProps>

export const AsideLink: AsideLinkComponent = props => {
  const [colapse, setColapse] = useState<boolean>(props.showSubList || true)
  const [icon, setIcon] = useState<FontAwesome6IconName>(
    props.icon || 'FaAngleRight'
  )

  const Icon = Icons[icon] || React.Fragment

  const LinkElement: FunctionComponent<ButtonElementProps> = ({
    children,
    ...rest
  }) => (
    <Link {...rest} href={props.href || '#'}>
      {children}
    </Link>
  )

  const ButtonElement: FunctionComponent<ButtonElementProps> = props => (
    <button
      {...props}
      type="button"
      role="button"
      onClick={buttonClickHandler}
    />
  )

  function buttonClickHandler() {
    setColapse(!colapse)

    if (!props.icon) {
      setIcon(icon === 'FaAngleRight' ? 'FaAngleDown' : 'FaAngleRight')
    }
  }

  const LinkWrapper = props.children ? ButtonElement : LinkElement

  return (
    <Container>
      <LinkWrapper className="hover:bg-zinc-200 active:bg-zinc-300 dark:active:bg-zinc-800 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-200">
        <IconWrapper>
          <div>
            <Icon />
          </div>
        </IconWrapper>
        <Body>
          <Label>{props.label}</Label>
        </Body>
      </LinkWrapper>
      {!colapse && <List>{props.children}</List>}
    </Container>
  )
}
