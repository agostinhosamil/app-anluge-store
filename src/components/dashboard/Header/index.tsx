import Link from 'next/link'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { FaBars, FaHome, FaSearch, FaUserCog, FaUsersCog } from 'react-icons/fa'

import {
  Container,
  FixedContainer,
  HeaderShadowElement,
  LogoWrapper,
  MenuContainer,
  MenuListWrapper,
  SearchBoxContainer
} from './styles'

export const Header = () => {
  const [fixed, setFixed] = useState<boolean>(false)

  const containerRef = useRef<HTMLElement>(null)

  const windowScrollHandler = useCallback(() => {
    if (!containerRef.current) {
      return
    }

    if (window.scrollY >= containerRef.current.offsetHeight + 10) {
      return !fixed && setFixed(true)
    }

    fixed && setFixed(false)
  }, [fixed])

  useEffect(() => {
    window.removeEventListener('scroll', windowScrollHandler, true)
    window.addEventListener('scroll', windowScrollHandler, true)
  })

  const ContainerElement = fixed ? FixedContainer : Container

  return (
    <Fragment>
      {fixed && <HeaderShadowElement />}
      <ContainerElement ref={containerRef}>
        <LogoWrapper>
          <div>
            <h3>Anluge</h3>
          </div>
        </LogoWrapper>
        <MenuContainer>
          <SearchBoxContainer>
            <div>
              <input
                type="text"
                name="query"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              <i>
                <FaSearch />
              </i>
            </div>
          </SearchBoxContainer>
          <MenuListWrapper>
            <ul>
              <li>
                <Link href="#">
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaUserCog />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaUsersCog />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaBars />
                </Link>
              </li>
            </ul>
          </MenuListWrapper>
        </MenuContainer>
      </ContainerElement>
    </Fragment>
  )
}
