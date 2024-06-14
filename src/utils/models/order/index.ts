import { z } from 'zod'

import { OrderFormDataObjectSchema } from '../validation/schemas/OrderFormDataObjectSchema'
import { orderLinkFactory } from './orderLinkFactory'
import { orderMessageFactory } from './orderMessageFactory'

export type OrderFormDataObject = z.infer<typeof OrderFormDataObjectSchema>

export const createOrder = async (orderFormDataObject: OrderFormDataObject) => {
  const validFormData = OrderFormDataObjectSchema.safeParse(orderFormDataObject)

  if (!validFormData.success) {
    console.log('Error')
    return
  }

  const { orders, user } = validFormData.data

  const orderMessage = orderMessageFactory({
    orders,
    user
  })

  const orderLink = orderLinkFactory(orderMessage)
  // console.log({
  //   orderMessage,
  //   decodedOrderMessage: decodeURIComponent(orderMessage)
  // })

  window.open(orderLink, '_blank')

  return true
}
