import { Advertise, Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import {
  advertiseIncludeFactory,
  setAdvertiseDefaultProps
} from '@utils/advertise'
import { formDataToJson } from '@utils/formDataToJson'
import { getObjectProps, getSearchParamsQueryArgument } from '~/utils'

type PostRequestBodyProps = {
  advertise: Advertise
}

export async function GET(request: NextRequest) {
  const queryString = request.nextUrl.searchParams
  const advertisesQueryArguments = getSearchParamsQueryArgument(queryString)

  const include = advertiseIncludeFactory()

  try {
    const advertises = await prisma.advertise.findMany({
      include,
      ...advertisesQueryArguments
    })

    return Response.json(advertises)
  } catch (err) {
    console.log('Error -> ', { err })
  }

  return Response.json([])
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()

  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  // console.log('requestBody -> ', requestBody)

  // return NextResponse.json({
  //   requestBody
  // })

  const advertiseProps = getObjectProps<Advertise>(requestBody.advertise, [
    'banner',
    'content',
    'title',
    'link',
    'popup',
    'position',
    'style',
    'productId',
    'postId',
    'expiresAt'
  ])

  // console.log('requestBody.advertise.medias => ', requestBody.advertise.medias)

  // const advertiseType = resolveAdvertiseType(advertiseProps.type)

  const include = advertiseIncludeFactory()

  // advertiseProps.slag = generateSlagByTitle(advertiseProps.title)

  // if (empty(advertiseProps.icon)) {
  //   advertiseProps.icon = 'advertise-icon-placeholder.jpg'
  // }

  try {
    const advertise = await prisma.advertise.create({
      include,
      data: {
        ...setAdvertiseDefaultProps(advertiseProps)
      }
    })

    return Response.json(advertise)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // console.log(err)
    }

    console.log('\n\n\n\n\n\n\n\nError -> ', err, '\n\n\n\n')

    return Response.json(
      { message: 'Error while request' },
      {
        status: 400
      }
    )
  }
}
