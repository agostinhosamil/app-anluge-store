import { prisma } from '@services/prisma'

import { getCookie } from '@utils/cookies'
import { productIncludeFactory } from '@utils/product'
import { StoreCartData } from 'store@components/Context'
import { APP_CART_DATA_COOKIE_NAME_KEY } from '~/config'

export const getCartData = async (): Promise<StoreCartData> => {
  const cartDataCookie = getCookie(APP_CART_DATA_COOKIE_NAME_KEY, '[]')

  try {
    const cartDataCookieData = JSON.parse(cartDataCookie) as Array<string>

    if (cartDataCookieData instanceof Array) {
      const products = await prisma.product.findMany({
        where: {
          id: {
            in: cartDataCookieData
          }
        },

        include: productIncludeFactory()
      })

      return products as StoreCartData
    }
  } catch (err) {}

  return []
}
