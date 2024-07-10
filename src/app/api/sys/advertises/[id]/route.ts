import { Advertise } from '@prisma/client'
import { NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { AdvertiseCreateOneSchema } from 'zod@schemas/createOneAdvertise.schema'

type Params = {
  id: string
}

type PostRequestBodyProps = {
  advertise: Advertise
}

export const GET: NextApiHandler<Params> = async (request, { params }) => {
  const { id } = params

  try {
    const advertise = await prisma.advertise.findUnique({
      where: {
        id
      },

      include: {
        post: {
          include: {
            medias: true
          }
        },

        product: {
          include: {
            medias: true
          }
        }
      }
    })

    if (advertise) {
      return NextResponse.json(advertise)
    }
  } catch (err) {}

  return NextResponse.json({
    error: 'not-found',
    message: 'advertise not found in the system'
  })
}

export const DELETE: NextApiHandler<Params> = async (request, { params }) => {
  const { id } = params

  try {
    const advertise = await prisma.advertise.delete({
      where: {
        id
      }
    })

    if (advertise) {
      return NextResponse.json(advertise)
    }
  } catch (err) {}

  return NextResponse.json({
    error: 'not-found',
    message: 'advertise not found in the system'
  })
}

export const PATCH: NextApiHandler<Params> = async (request, { params }) => {
  const requestBody = await getRequestBody<PostRequestBodyProps>(request)

  // const advertiseProps = getObjectProps<Advertise>(requestBody.advertise, [
  //   'banner',
  //   'content',
  //   'title',
  //   'link',
  //   'popup',
  //   'position',
  //   'style',
  //   'productId',
  //   'postId',
  //   'expiresAt'
  // ])

  const advertiseProps = AdvertiseCreateOneSchema.safeParse({
    data: requestBody.advertise
  })

  if (!advertiseProps.success) {
    return NextResponse.json({
      error: true,
      success: false,
      errorCode: 'INVALID_REQUEST_INPUT',
      message: 'invalid request input'
    })
  }

  try {
    const { data } = advertiseProps.data

    const advertise = await prisma.advertise.update({
      where: {
        id: params.id
      },

      data,

      include: {
        post: {
          include: {
            medias: true
          }
        },

        product: {
          include: {
            medias: true
          }
        }
      }
    })

    return NextResponse.json(advertise)
  } catch (err) {
    /**
     * TODO: Handle this
     */
    // pass
  }

  return NextResponse.json({
    error: true,
    success: false,
    errorType: 'SYS_ERROR',
    message: 'something went wrong'
  })
}
