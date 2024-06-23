import { z } from 'zod'

import { axios } from '@services/axios'
import { OrderFormDataObjectSchema } from '@utils/models/validation/schemas/OrderFormDataObjectSchema'
import { CartProps } from '~/Types/Cart'

export type OrderFormDataObject = z.infer<typeof OrderFormDataObjectSchema>

type CreateOrderRequestSuccessResponse = {
  success: true
  cart: CartProps
}

type CreateOrderRequestFailureResponse = {
  success: false
  cart: null
}

export type CreateOrderRequestResponse =
  | CreateOrderRequestSuccessResponse
  | CreateOrderRequestFailureResponse

export const createOrder = async (
  orderFormDataObject: OrderFormDataObject
): Promise<CreateOrderRequestResponse> => {
  const validFormData = OrderFormDataObjectSchema.safeParse(orderFormDataObject)

  if (!validFormData.success) {
    console.log(
      '>> orderFormDataObject Error: ',
      orderFormDataObject,
      '\n\nErrors: ',
      'formErrors: ',
      validFormData.error.formErrors,
      'errors: ',
      validFormData.error.errors
    )

    return {
      cart: null,
      success: false
    }
  }

  // const { orders, user } = validFormData.data
  // const orderMessage = orderMessageFactory({
  //   orders,
  //   user
  // })
  // const orderLink = orderLinkFactory(orderMessage)
  // console.log({
  //   orderMessage,
  //   decodedOrderMessage: decodeURIComponent(orderMessage)
  // })
  // window.open(orderLink, '_blank')

  try {
    const response = await axios.post<CreateOrderRequestResponse>(
      '/store/cart',
      validFormData.data
    )

    if (typeof response.data === 'object' && response.data.success) {
      return response.data
    }
  } catch (err) {
    // pass
  }

  return {
    cart: null,
    success: false
  }
}
