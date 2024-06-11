import { ProductProps } from 'Types/Product'

export type StoreCartItem = ProductProps

export type StoreCartData = Array<StoreCartItem>

export type StoreContextProps = {
  products: StoreCartData
  productOrdered: (product: ProductProps) => boolean
  addOrder: (product: ProductProps) => void
  removeOrder: (productId: string) => void
}
