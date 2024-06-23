import { createContext, useContext, useEffect, useState } from 'react'

import { cookie } from '@utils/cookies/client'

import { APP_CART_DATA_COOKIE_NAME_KEY } from '~/config'
import { StoreCartData, StoreContextProps } from './types'

export * from './types'

export const StoreContext = createContext<StoreContextProps>(
  {} as StoreContextProps
)

type StoreContextProviderProps = {
  cart: StoreCartData
}

type StoreContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & StoreContextProviderProps
>

export const StoreContextProvider: StoreContextProviderComponent = props => {
  const [cart, setCart] = useState<StoreCartData>(props.cart)

  useEffect(() => {
    // TODO: Keep the added cart items before
    setCart(props.cart)
  }, [props.cart])

  const updateCart = (updatedCartData: StoreCartData): void => {
    cookie.setCookie(
      APP_CART_DATA_COOKIE_NAME_KEY,
      updatedCartData.map(product => ({
        quantity: product.quantity || 1,
        id: product.id
      })),
      {
        'Max-Age': '1M',
        Path: '/'
      }
    )

    setCart(updatedCartData)
  }

  const contextData: StoreContextProps = {
    products: cart,

    productOrdered(product) {
      return Boolean(cart.find(({ id }) => id === product.id))
    },

    addOrder(product) {
      if (!contextData.productOrdered(product)) {
        const updatedCartData = [...cart, product]

        updateCart(updatedCartData)
      }
    },

    updateOrder(productId, product) {
      let foundProduct = false

      const updatedOrders = cart.map(order => {
        if (order.id !== productId) {
          return order
        }

        foundProduct = true

        return {
          ...order,
          ...product
        }
      })

      if (foundProduct) {
        updateCart(updatedOrders)
      }
    },

    removeOrder(productId) {
      const updatedCartData = cart.filter(product => product.id !== productId)

      updateCart(updatedCartData)
    },

    clearCart() {
      updateCart([])

      return cart
    }
  }

  return (
    <StoreContext.Provider value={contextData}>
      {props.children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)
