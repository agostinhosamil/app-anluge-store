import { Category, Prisma } from '@prisma/client'

import { empty } from '~/utils'
import { generateSlagByTitle } from '~/utils/generateSlagByTitle'

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
    category.slag = generateSlagByTitle(category.title)
  }

  return category
}
