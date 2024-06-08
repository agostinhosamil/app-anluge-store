'use client'

import { ProductPageContextProvider } from './context'

type ProductPageWrapperProps = {
  product: any
}

type ProductPageWrapperComponent = React.FunctionComponent<
  React.PropsWithChildren & ProductPageWrapperProps
>

export * from './types'

export const ProductPageWrapper: ProductPageWrapperComponent = ({
  product,
  children
}) => {
  console.log({ children })

  return (
    <ProductPageContextProvider product={product}>
      {children}
    </ProductPageContextProvider>
  )
}
