import { useEffect, useRef } from 'react'
import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { Container } from './styles'
import { UserCard } from './UserCard'
import { UserCardPlaceholder } from './UserCardPlaceholder'

type HeaderUserMenuProps = {
  onClose?: () => void
}

type HeaderUserMenuComponent = React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement> & HeaderUserMenuProps
>

export const HeaderUserMenu: HeaderUserMenuComponent = ({
  onClose,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeMenuOnBlurState = useRef<boolean>(true)

  const authContext = useAuthenticationContext()

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

  return (
    <Container
      onMouseEnter={containerMouseEnterHandler}
      onMouseLeave={containerMouseLeaveHandler}
      onBlur={containerBlurHandler}
      ref={containerRef}
      {...props}
    >
      {(authContext.auth.user && <UserCard user={authContext.auth.user} />) || (
        <UserCardPlaceholder />
      )}
    </Container>
  )
}
