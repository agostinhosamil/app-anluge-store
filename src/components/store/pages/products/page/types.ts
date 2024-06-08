import { ProductProps } from '~/Types/Product'

export interface ProductPageContextProps {
  product: ProductProps
}

export type ProductPageContextProviderProps = {
  product: ProductProps
}

export type ProductPageContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & ProductPageContextProviderProps
>

export type ProductPageProps = {
  product: ProductProps
}
