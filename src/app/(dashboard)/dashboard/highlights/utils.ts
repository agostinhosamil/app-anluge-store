import { prisma } from '@services/prisma'

import { HighlightCategory, HighlightProduct, Highlights } from './types'

export * from './types'

export const getHighlights = async (): Promise<Highlights> => {
  const highlights = await prisma.highlight.findMany({
    include: {
      product: {
        select: {
          id: true,
          name: true,
          slag: true,
          medias: {
            take: 1
          }
        }
      },

      category: {
        select: {
          id: true,
          title: true,
          slag: true,
          banner: true
        }
      }
    },

    where: {
      context: 'STORE'
    }
  })

  const categories: Array<HighlightCategory> = []
  const products: Array<HighlightProduct> = []

  for (const highlight of highlights) {
    if (highlight.category) {
      categories.push(highlight)
      continue
    }

    if (highlight.product) {
      products.push(highlight)
    }
  }

  return {
    categories,
    products
  }
}
