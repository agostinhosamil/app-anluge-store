import { NextResponse } from 'next/server'

import { prisma } from '~/services/prisma'
import { NextApiHandler } from '~/Types/next'

export const GET: NextApiHandler = async request => {
  const take = 50

  let skip = Number(request.nextUrl.searchParams.get('page'))

  skip = take * (!isNaN(skip) ? skip : 1)

  const advertises = await prisma.advertise.findMany({
    skip,
    take,

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

  return NextResponse.json(advertises)
}
