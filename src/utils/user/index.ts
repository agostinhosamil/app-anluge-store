import { cartIncludeFactory } from '@utils/cart'

export const userIncludeFactory = () => ({
  carts: {
    include: cartIncludeFactory()
  },

  favorites: {
    include: {
      product: {
        select: {
          id: true
        }
      }
    }
  },

  role: {
    include: {
      permissions: true
    }
  }
})
