import { prisma } from '~/services/prisma'
import {
  AnyCategoryProps,
  CategoryProps,
  CategoryWithProductId
} from '~/Types/Category'
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

export const getCategoryChildren = (
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

      // console.log('>>> categorySubcategories: ', categorySubcategories)

      resolve({
        ...category,
        categories: await getAllCategoriesChildren(categorySubcategories)
      })
    }

    promiseResolver()
  })
}

export const getCategoryChildrenById = (
  category: AnyCategoryProps
): Promise<CategoryWithProductId> => {
  return new Promise(resolve => {
    const promiseResolver = async () => {
      const categorySubcategories = await prisma.category.findMany({
        where: {
          parentId: category.id
        },
        include: {
          categories: {
            include: {
              // categories: {
              //   select: {
              //     id: true,
              //     title: true
              //   }
              // },

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

      // const products: Array<ProductWithId> = category.products

      const categoryData: CategoryWithProductId = {
        ...category,
        // id: category.id,
        // products,
        categories: await getAllCategoriesChildrenById(categorySubcategories)
      }

      resolve(categoryData)
    }

    promiseResolver()
  })
}

export const getAllCategoriesChildrenById = async (
  categories: Array<AnyCategoryProps>
): Promise<Array<CategoryWithProductId>> => {
  const data = await Promise.all(
    categories.map(category => getCategoryChildrenById(category))
  )

  return data
}

export const getAllCategoriesChildren = async (
  categories: Array<CategoryProps>
): Promise<Array<CategoryProps>> => {
  const data = await Promise.all(
    categories.map(category => getCategoryChildren(category))
  )

  return data
}
