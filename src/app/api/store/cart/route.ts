import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import {
  OrderFormDataObject,
  OrderFormDataObjectSchema
} from '@utils/models/validation/schemas/OrderFormDataObjectSchema'
import { getRequestBody } from '@utils/server/getRequestBody'
import {
  defaultRolePrismaQueryData,
  masterAdminRolePrismaQueryData
} from '~/config/cache/models/role'
import { Hash } from '~/helpers/Hash'
import { isMasterKey } from '~/utils'

export const POST = async (request: NextRequest) => {
  const requestBody = await getRequestBody<OrderFormDataObject>(request)

  if (!OrderFormDataObjectSchema.safeParse(requestBody)) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request input'
    })
  }

  const { orders, user } = requestBody

  const role = isMasterKey(user.email)
    ? masterAdminRolePrismaQueryData
    : defaultRolePrismaQueryData

  const password = await Hash.make(user.password)

  const cartData = {
    orders: {
      createMany: {
        data: orders.map(order => ({
          productId: order.productId,
          quantity: order.quantity
        }))
      }
    }
  }

  try {
    const cart = await prisma.cart.create({
      data: {
        ...cartData,
        user: {
          connectOrCreate: {
            where: {
              id: user.id || '<<non-existing-user>>'

              // OR: [
              //   {
              //     id: user.id || '<<non-existing-user>>'
              //   },
              //   {
              //     phone: user.phone
              //   },
              //   {
              //     email: user.email
              //   }
              // ]
            },

            create: {
              email: user.email,
              phone: user.phone,
              name: user.name,
              password,
              role
            }
          }
        }
      },

      include: {
        user: {
          include: {
            role: {
              include: {
                permissions: true
              }
            }
          }
        },
        orders: {
          include: {
            product: true
          }
        }
      }
    })

    // const cartOwner = await prisma.user.upsert({
    //   where: {
    //     id: user.id || '<<non-existing-user>>',

    //     OR: [
    //       {
    //         id: user.id || '<<non-existing-user>>'
    //       },
    //       {
    //         phone: user.phone
    //       },
    //       {
    //         email: user.email
    //       }
    //     ]
    //   },

    //   create: {
    //     email: user.email,
    //     phone: user.phone,
    //     name: user.name,
    //     password,
    //     role,
    //     carts
    //   },

    //   update: {
    //     carts
    //   },

    //   include: {
    //     carts: {
    //       include: {
    //         orders: true
    //       }
    //     },

    //     role: {
    //       include: {
    //         permissions: true
    //       }
    //     }
    //   }
    // })

    return NextResponse.json({
      success: true,
      cart
    })
  } catch (err) {
    console.log('>>> Error: ', err)
  }

  return NextResponse.json(
    {
      success: false,
      message: 'something went wrong'
    },
    {
      status: 500
    }
  )
}
