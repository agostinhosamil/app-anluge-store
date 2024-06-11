'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Header as HeaderMenu } from '@components/Header'
import { TopHeader } from '@components/TopHeader'

import { HeaderBody } from './HeaderBody'

import {
  Container,
  HeaderMenuFixedWrapper,
  HeaderMenuShadow,
  HeaderMenuStaticWrapper
} from './styles'

export const Header: React.FunctionComponent = () => {
  const [fixed, setFixed] = useState<boolean>(false)

  const headerMenuWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const windowScrollHandler = () => {
      const headerMenuWrapperHeight =
        (headerMenuWrapperRef.current &&
          headerMenuWrapperRef.current.offsetHeight) ||
        100

      if (window.scrollY >= headerMenuWrapperHeight) {
        !fixed && setFixed(true)

        return
      }

      fixed && setFixed(false)
    }

    window.addEventListener('scroll', windowScrollHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  })

  const HeaderMenuWrapper = fixed
    ? HeaderMenuFixedWrapper
    : HeaderMenuStaticWrapper

  return (
    <Container>
      <TopHeader module="store" />
      {fixed && <HeaderMenuShadow />}
      <HeaderMenuWrapper ref={headerMenuWrapperRef}>
        <HeaderMenu style="light" size="large" />
      </HeaderMenuWrapper>
      <HeaderBody />
      {/* <HeaderCategoryList /> */}
    </Container>
  )
}
