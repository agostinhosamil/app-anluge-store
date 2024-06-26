import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '../category'
import { productIncludeFactory } from '../product'

export const getAllCategories = async (): Promise<Array<CategoryProps>> => {
  const categories: Array<CategoryProps> = []

  let cursor = 0
  let keepLoop = true
  const concurrency = 50

  while (keepLoop) {
    try {
      const currentCategoriesSlice: Array<CategoryProps> =
        await prisma.category.findMany({
          skip: cursor,
          take: concurrency,
          include: {
            categories: {
              include: categoryIncludeFactory()
            },
            products: {
              include: productIncludeFactory()
            }
          }
        })

      if (currentCategoriesSlice.length <= 0) {
        keepLoop = false
      }

      cursor += concurrency

      categories.push(...currentCategoriesSlice)
    } catch (err) {
      break
    }
  }

  return categories
}

const getCategoryChildren = (
  category: CategoryProps
): Promise<CategoryProps> => {
  return new Promise(resolve => {
    const promiseResolver = async () => {
      const categorySubcategories = await prisma.category.findMany({
        where: {
          parentId: category.id
        },
        include: {
          categories: {
            include: categoryIncludeFactory()
          },
          products: {
            include: productIncludeFactory()
          }
        }
      })

      console.log('>>> categorySubcategories: ', categorySubcategories)

      resolve({
        ...category,
        categories: await getAllCategoriesChildren(categorySubcategories)
      })
    }

    promiseResolver()
  })
}

export const getAllCategoriesChildren = async (
  categories: Array<CategoryProps>
): Promise<Array<CategoryProps>> => {
  const data = await Promise.all(
    categories.map(category => getCategoryChildren(category))
  )

  return data
}
