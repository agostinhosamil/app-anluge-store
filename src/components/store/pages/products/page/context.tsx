import { createContext, useContext } from 'react'

import type {
  ProductPageContextProps,
  ProductPageContextProviderComponent
} from './types'

export const ProductPageContext = createContext<ProductPageContextProps>(
  {} as ProductPageContextProps
)

export const ProductPageContextProvider: ProductPageContextProviderComponent =
  ({ product, children, category }) => {
    return (
      <ProductPageContext.Provider value={{ product, category }}>
        {children}
      </ProductPageContext.Provider>
    )
  }

export const useProductPageContext = () => useContext(ProductPageContext)
