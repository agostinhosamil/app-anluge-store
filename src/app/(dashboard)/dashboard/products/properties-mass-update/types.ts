import { ProductProps } from '~/Types/Product'

export type Properties = {
  [key: string]: string | Properties
}

export type ProductsProperties = {
  [id: string]: {
    props: Properties
    product: ProductProps
  }
}
