'use client'

import { StoreContextProvider } from 'store@components/Context'
import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'
import { Container } from 'store@components/styles'

import { StoreCartData } from 'store@components/Context'

type StoreLayoutContentProps = {
  cart: StoreCartData
}

type StoreLayoutContentComponent = React.FunctionComponent<
  React.PropsWithChildren & StoreLayoutContentProps
>

export const StoreLayoutContent: StoreLayoutContentComponent = ({
  cart,
  ...props
}) => {
  return (
    <Container>
      <Header />
      <StoreContextProvider cart={cart}>{props.children}</StoreContextProvider>
      <Footer />
    </Container>
  )
}
