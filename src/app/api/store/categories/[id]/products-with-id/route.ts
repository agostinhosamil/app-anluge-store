import { NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { getCategoryChildrenById } from '@utils/newsFeed'
import { CategoryWithProductId } from 'Types/Category'
import { NextApiHandler } from 'Types/next'

type Params = {
  id: string
}

export const maxDuration = 60

export const GET: NextApiHandler<Params> = async (request, { params }) => {
  const categoryData = await prisma.category.findFirst({
    where: {
      OR: [
        {
          slag: {
            equals: params.id
          }
        },

        {
          id: {
            equals: params.id
          }
        }
      ]
    },
    include: {
      categories: {
        include: {
          categories: {
            select: {
              id: true
            }
          },

          products: {
            select: {
              id: true
            }
          }
        }
      },
      products: {
        select: {
          id: true
        }
      }
    }
  })

  if (!categoryData) {
    return NextResponse.json({
      status: 'error',
      error: 'not-found',
      message: 'Category not found'
    })
  }

  const category: CategoryWithProductId =
    await getCategoryChildrenById(categoryData)

  return NextResponse.json(category)
}
