import { cartIncludeFactory } from '@utils/cart'

export const userIncludeFactory = () => ({
  carts: {
    include: cartIncludeFactory()
  },
  role: {
    include: {
      permissions: true
    }
  }
})
