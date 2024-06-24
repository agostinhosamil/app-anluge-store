import { prisma } from '@services/prisma'

import { getCookie } from '@utils/cookies'
import { productIncludeFactory } from '@utils/product'
import { StoreCartData } from 'store@components/Context'
import { APP_CART_DATA_COOKIE_NAME_KEY } from '~/config'
import { ProductProps } from '~/Types/Product'
import { generateRandomAlphaNumericId } from '~/utils'

export const getCartData = async (): Promise<StoreCartData> => {
  const cartDataCookie = getCookie(APP_CART_DATA_COOKIE_NAME_KEY, '[]')

  try {
    const cartDataCookieData = JSON.parse(cartDataCookie) as Array<{
      id: string
      quantity: number
    }>

    const getProductAmount = (productId: string) => {
      const product = cartDataCookieData.find(({ id }) => {
        return id === productId
      })

      return product?.quantity || 1
    }

    if (cartDataCookieData instanceof Array) {
      const products: Array<ProductProps> = await prisma.product.findMany({
        where: {
          id: {
            in: cartDataCookieData.map(product => product.id)
          }
        },

        include: productIncludeFactory()
      })

      return products.map(product => ({
        ...product,
        quantity: getProductAmount(product.id)
      }))
    }
  } catch (err) {}

  return []
}

export const cartIncludeFactory = () => ({
  include: {
    orders: {
      include: {
        product: {
          include: {
            medias: true,
            category: true
          }
        }
      }
    }
  }
})

export const generateCartCode = (): string => {
  const cartCodeTemplate = 'ANL-$0U'

  const cartCodeToken = generateRandomAlphaNumericId(6)

  return cartCodeTemplate.replace('$0', cartCodeToken)
}
