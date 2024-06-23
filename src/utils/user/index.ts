import { cartIncludeFactory } from '@utils/cart'

export const userIncludeFactory = () => ({
  carts: cartIncludeFactory(),
  role: {
    include: {
      permissions: true
    }
  }
})
