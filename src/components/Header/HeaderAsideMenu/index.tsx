import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { Partial } from '@components/Partial'
import { signOut } from '@utils/auth/client'
import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { Icon } from '~/components/Icon'
import { useStoreContext } from '~/components/store/Context'
import { getUserOpenedCarts, userHasOpenedCarts } from '~/utils/models/user'

import { Spinner } from 'react-bootstrap'
import { redirect } from '~/utils/navigation'
import { Container } from './styles'

type HeaderAsideMenuProps = {
  onClose?: () => void
}

type HeaderAsideMenuComponent = React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement> & HeaderAsideMenuProps
>

type LoadingState = 'signOut'

export const HeaderAsideMenu: HeaderAsideMenuComponent = ({
  onClose,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeMenuOnBlurState = useRef<boolean>(true)

  const { auth } = useAuthenticationContext()
  const { products: cartOrders } = useStoreContext()

  const [loading, setLoading] = useState<LoadingState | false>(false)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.tabIndex = Math.random()
      containerRef.current.focus()
    }
  })

  const containerMouseEnterHandler = () => {
    closeMenuOnBlurState.current = false
  }

  const containerMouseLeaveHandler = () => {
    closeMenuOnBlurState.current = true
  }

  const containerBlurHandler = () => {
    if (closeMenuOnBlurState.current && typeof onClose === 'function') {
      onClose()
    }
  }

  const signOutButtonClickHandler = () => {
    setLoading('signOut')

    if (loading === 'signOut') {
      return
    }

    signOut().then(() => {
      redirect(window.location.href)

      setLoading(false)
    })
  }

  return (
    <Container
      onMouseEnter={containerMouseEnterHandler}
      onMouseLeave={containerMouseLeaveHandler}
      onBlur={containerBlurHandler}
      ref={containerRef}
      {...props}
    >
      <ul>
        <li>
          <Link href="/">
            <i>
              <Icon name="FaHouse" />
            </i>
            <span>Página inicial</span>
          </Link>
        </li>
        <Partial auth>
          <li>
            <Link href="/me/orders">
              <i>
                <Icon name="FaFirstOrder" />
              </i>
              <span>Meus pedidos</span>
              {auth.user && userHasOpenedCarts(auth.user) && (
                <b>{getUserOpenedCarts(auth.user).length}</b>
              )}
              {/* <b>123</b> */}
            </Link>
          </li>
        </Partial>
        <li>
          <Link href="/me/cart">
            <i>
              <Icon name="FaCartShopping" />
            </i>
            <span>Meu carrinho</span>
            {cartOrders.length >= 1 && <b>{cartOrders.length}</b>}
          </Link>
        </li>
        <Partial auth>
          <li>
            <Link href="/me/favorites">
              <i>
                <Icon name="FaHeart" />
              </i>
              <span>Lista de desejo</span>
            </Link>
          </li>
        </Partial>
        <Partial auth>
          <li>
            <b></b>
          </li>
          <Partial isNeither={['client', 'guest']}>
            <li>
              <Link href="/dashboard">
                <i>
                  <Icon name="FaDashcube" />
                </i>
                <span>Ir ao painel administrador</span>
              </Link>
            </li>
          </Partial>
          <li>
            <Link href="">
              <i>
                <Icon name="FaWhmcs" />
              </i>
              <span>Definições conta</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              disabled={loading === 'signOut'}
              onClick={signOutButtonClickHandler}
            >
              <i>
                <Icon name="FaPowerOff" />
              </i>
              <span>Terminar sessão</span>
              {loading === 'signOut' && (
                <div>
                  <Spinner size="sm" />
                </div>
              )}
            </button>
          </li>
        </Partial>
      </ul>
    </Container>
  )
}
