import { NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { handler } from '@utils/next'
import { getSearchParamsQueryArgument } from '~/utils'

export const maxDuration = 60

export const GET = handler(async request => {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)
  const highlights = await prisma.highlight.findMany({
    ...productsQueryArguments,
    orderBy: {
      index: 'asc'
    },

    include: {
      category: {
        select: {
          slag: true,
          id: true
        }
      },

      product: {
        select: {
          id: true
        }
      }
    }
  })

  return NextResponse.json(highlights)
})
