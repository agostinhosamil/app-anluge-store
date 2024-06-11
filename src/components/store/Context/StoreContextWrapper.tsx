'use client'

import { StoreContextProvider } from '.'
import { StoreCartData } from './types'

type StoreContextWrapperProps = {
  cart: StoreCartData
}

type StoreContextWrapperComponent = React.FunctionComponent<
  React.PropsWithChildren & StoreContextWrapperProps
>

export const StoreContextWrapper: StoreContextWrapperComponent = props => {
  return (
    <StoreContextProvider cart={props.cart}>
      {props.children}
    </StoreContextProvider>
  )
}
