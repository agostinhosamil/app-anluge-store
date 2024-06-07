import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import BootstrapContainer from 'react-bootstrap/Container'
import { FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa6'

import { Header as HeaderMenu } from '@components/Header'

import { HeaderBody } from './HeaderBody'

import {
  Container,
  HeaderMenuFixedWrapper,
  HeaderMenuShadow,
  HeaderMenuStaticWrapper,
  TopHeaderContainer,
  TopHeaderData,
  TopHeaderMenu
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
      <TopHeaderContainer>
        <BootstrapContainer>
          <TopHeaderMenu>
            <ul>
              <li className="selected">
                <Link href="/">Marketplace</Link>
              </li>
              <li>
                <Link href="/about">Instituição</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/partners">Empresas</Link>
              </li>
            </ul>
          </TopHeaderMenu>
          <TopHeaderData>
            <ul>
              <li>
                <span>Abertos de SEG-SEX</span>
              </li>
              <li>
                <i>
                  <FaClock />
                </i>
                <span>7H-17H</span>
              </li>
              <li>
                <i>
                  <FaPhone />
                </i>
                <span>+244 923 456 456</span>
              </li>
              <li>
                <i>
                  <FaLocationArrow />
                </i>
                <span>Luanda - Kinaxixi, Rua comandante Kwenha</span>
              </li>
            </ul>
          </TopHeaderData>
        </BootstrapContainer>
      </TopHeaderContainer>
      {fixed && <HeaderMenuShadow />}
      <HeaderMenuWrapper ref={headerMenuWrapperRef}>
        <HeaderMenu style="light" size="large" />
      </HeaderMenuWrapper>
      <HeaderBody />
      {/* <HeaderCategoryList /> */}
    </Container>
  )
}
