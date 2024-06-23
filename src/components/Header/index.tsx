import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { HeaderSearchBox } from '@components/HeaderSearchBox'
import { Partial } from '@components/Partial'

import { useStoreContext } from 'store@components/Context'
import { HeaderAsideMenu } from './HeaderAsideMenu'
import { HeaderMenuItem } from './HeaderMenuItem'
import { HeaderUserMenu } from './HeaderUserMenu'
import { Container, HeaderMenu, HeaderMenuList } from './styles'

type HeaderComponent = React.FunctionComponent<{
  style?: 'light' | 'default'
  size?: 'large' | 'default'
}>

export const Header: HeaderComponent = ({ style = 'default', ...props }) => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false)
  const [showAsideMenu, setShowAsideMenu] = useState<boolean>(false)

  const { products } = useStoreContext()

  const asideMenuButtonClickHandler: React.MouseEventHandler = () => {
    setShowAsideMenu(!showAsideMenu)
  }

  const userMenuButtonClickHandler: React.MouseEventHandler = () => {
    setShowUserMenu(!showUserMenu)
  }

  return (
    <Container $colorStyle={style}>
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
        <HeaderMenuList>
          <HeaderMenuItem href="/" icon="FaHouse" label="Página Inicial" />
          <HeaderMenuItem
            icon="FaUser"
            as="button"
            onClick={userMenuButtonClickHandler}
          />
          <Partial auth>
            <HeaderMenuItem href="/me/favorites" icon="FaHeart" />
          </Partial>
          <HeaderMenuItem
            href="/me/cart"
            icon="FaCartShopping"
            count={products.length >= 1 ? products.length : undefined}
          />
          <HeaderMenuItem
            icon="FaBarsStaggered"
            as="button"
            onClick={asideMenuButtonClickHandler}
          />
        </HeaderMenuList>
      </HeaderMenu>
      {showAsideMenu && (
        <HeaderAsideMenu onClose={() => setShowAsideMenu(false)} />
      )}
      {showUserMenu && (
        <HeaderUserMenu onClose={() => setShowUserMenu(false)} />
      )}
    </Container>
  )
}
