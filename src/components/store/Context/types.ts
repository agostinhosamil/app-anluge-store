import { ProductProps } from 'Types/Product'

export type StoreCartItem = ProductProps & {
  quantity?: number
}

export type StoreCartData = Array<StoreCartItem>

export type StoreContextProps = {
  products: StoreCartData
  productOrdered: (product: StoreCartItem) => boolean
  addOrder: (product: StoreCartItem) => void
  updateOrder: (productId: string, product: Partial<StoreCartItem>) => void
  removeOrder: (productId: string) => void
  clearCart: () => StoreCartData
}
