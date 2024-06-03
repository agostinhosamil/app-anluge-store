import Image from 'next/image'
import Link from 'next/link'
import BootstrapContainer from 'react-bootstrap/Container'

import { HeaderSearchBox } from '@components/HeaderSearchBox'

import { useState } from 'react'
import { HeaderAsideMenu } from './HeaderAsideMenu'
import { HeaderMenuItem } from './HeaderMenuItem'
import { HeaderUserMenu } from './HeaderUserMenu'
import { Container, HeaderMenu } from './styles'

type HeaderComponent = React.FunctionComponent<{
  style?: 'light' | 'default'
  size?: 'large' | 'default'
}>

export const Header: HeaderComponent = ({ style = 'default', ...props }) => {
  const [showAsideMenu, setShowAsideMenu] = useState<boolean>(false)
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false)

  const asideMenuButtonClickHandler: React.MouseEventHandler = () => {
    setShowAsideMenu(!showAsideMenu)
  }

  const userMenuButtonClickHandler: React.MouseEventHandler = () => {
    setShowUserMenu(!showUserMenu)
  }

  return (
    <Container $colorStyle={style}>
      <BootstrapContainer>
        <HeaderMenu $size={props.size}>
          <div className="header-logo-container">
            <Link href="/">
              <div className="header-logo-wrapper">
                <Image
                  alt="Anluge"
                  src="/anluge-logo.jpg"
                  width={45}
                  height={45}
                />
              </div>
              <h3>Anluge</h3>
            </Link>
          </div>
          <div className="header-search-box-container">
            <HeaderSearchBox />
          </div>
          <ul>
            <HeaderMenuItem href="/" icon="FaHouse" label="Página Inicial" />
            <HeaderMenuItem
              icon="FaUser"
              as="button"
              onClick={userMenuButtonClickHandler}
            />
            <HeaderMenuItem href="/me/favorites" icon="FaHeart" />
            <HeaderMenuItem
              href="/me/cart"
              icon="FaCartShopping"
              count={12345}
            />
            <HeaderMenuItem
              icon="FaBarsStaggered"
              as="button"
              onClick={asideMenuButtonClickHandler}
            />
          </ul>
          {showAsideMenu && (
            <HeaderAsideMenu onClose={() => setShowAsideMenu(false)} />
          )}
          {showUserMenu && (
            <HeaderUserMenu onClose={() => setShowUserMenu(false)} />
          )}
        </HeaderMenu>
      </BootstrapContainer>
    </Container>
  )
}
