import { StoreCartData } from '@components/store/Context'
import {
  createOrder,
  CreateOrderRequestResponse,
  OrderFormDataObject
} from '@utils/models/order'
import { UserProps } from 'Types/UserProps'
import { generateRandomId } from '~/utils'

export type CreateUserOrderUtilProps = {
  user: Partial<UserProps> & {
    name: string
    email: string
    phone: string
  }
  products: StoreCartData
}

type CreateUserOrderUtil = (
  props: CreateUserOrderUtilProps
) => Promise<CreateOrderRequestResponse>

export const createUserOrder: CreateUserOrderUtil = async props => {
  const { user, products } = props

  const password =
    typeof user.password === 'string' ? user.password : generateRandomId()

  const createOrderFormData: OrderFormDataObject = {
    orders: products.map(product => ({
      productCode: String(product.code),
      productId: product.id,
      productName: product.name,
      quantity: product.quantity || 1
    })),

    user: {
      id: user.id || null,
      email: user.email,
      name: user.name,
      phone: user.phone,
      password
    }
  }

  const createdOrder = await createOrder(createOrderFormData)

  return createdOrder
}
