import { CategoryProps } from '~/Types/Category'
import { ProductProps } from '~/Types/Product'

export interface ProductPageContextProps {
  product: ProductProps
  category: CategoryProps | null
}

export type ProductPageContextProviderProps = {
  product: ProductProps
  category: CategoryProps | null
}

export type ProductPageContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & ProductPageContextProviderProps
>

export type ProductPageProps = {
  product: ProductProps
}
