import { Category, Prisma } from '@prisma/client'
import { prisma } from '~/services/prisma'
import { CategoryWithProductId } from '~/Types/Category'

import { empty } from '~/utils'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'

export const categoryIncludeFactory = (): Prisma.CategoryInclude => {
  const include: Prisma.CategoryInclude = {
    categories: {},
    products: {
      include: {
        category: true,
        faqs: {
          include: {
            user: true
          }
        },
        favorites: true,
        tags: true,
        medias: true
      }
    }
  }

  // include.categories = {
  //   include
  // }

  return include
}

export const setCategoryDefaultProps = (category: Category): Category => {
  if (empty(category.icon)) {
    category.icon = 'category-icon-placeholder.jpg'
  }

  if (empty(category.slag)) {
    category.slag = generateSlagByTitleWithoutSignature(category.title)
  }

  return category
}

export const getCategoryDataById = async (
  categoryId: string
): Promise<CategoryWithProductId | null> => {
  const category: CategoryWithProductId | null =
    await prisma.category.findUnique({
      where: {
        id: categoryId
      },

      include: {
        categories: {
          // include: categoryIncludeFactory()
          select: {
            id: true
          }
        },

        products: {
          // include: productIncludeFactory()
          select: {
            id: true
          }
        }
      }
    })

  return category
}

export const getCategoryDataFromImageFileName = (imageFileName: string) => {
  const re = /^(([a-zA-Z0-9-_.]+)\s*-\s*(Icon|Banner)(\.(png|jpe?g))?)$/i

  const imageFileNameReMatch = imageFileName.match(re)

  if (imageFileNameReMatch) {
    const [, , slag, imageType] = Array.from(imageFileNameReMatch).map(data =>
      String(data).toLowerCase()
    )

    return {
      slag,
      imageType
    }
  }

  return null
}
