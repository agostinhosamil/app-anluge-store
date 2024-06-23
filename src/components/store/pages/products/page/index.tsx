'use client'

import { CategoryProps } from '~/Types/Category'
import { ProductPageContextProvider } from './context'

type ProductPageWrapperProps = {
  product: any
  category?: CategoryProps | null
}

type ProductPageWrapperComponent = React.FunctionComponent<
  React.PropsWithChildren & ProductPageWrapperProps
>

export * from './types'

export const ProductPageWrapper: ProductPageWrapperComponent = ({
  product,
  category,
  children
}) => {
  return (
    <ProductPageContextProvider product={product} category={category || null}>
      {children}
    </ProductPageContextProvider>
  )
}
