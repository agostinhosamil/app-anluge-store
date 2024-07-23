import { Prisma } from '@prisma/client'

type ProductWithCategory = Prisma.ProductGetPayload<{
  include: {
    category: {
      select: {
        id: true
        title: true
        slag: true
      }
    }
  }
}>

type ProductsByCategory = {
  [key: string]: {
    category: {
      slag: string
      title: string
      id: string
    }

    products: Array<{
      id: string
    }>
  }
}

export const groupProductsByCategory = (
  products: Array<ProductWithCategory>
): ProductsByCategory => {
  const defaultCategoryDataObject = {
    category: {
      id: '',
      slag: '',
      title: ''
    },

    products: []
  }

  const productsByCategory: ProductsByCategory = {
    '': defaultCategoryDataObject
  }

  for (const product of products) {
    const productCategoryKey = product.category?.slag || ''

    productsByCategory[productCategoryKey] =
      productsByCategory[productCategoryKey] || defaultCategoryDataObject

    if (
      !productsByCategory[productCategoryKey].products.some(
        ({ id }) => id === product.id
      )
    ) {
      productsByCategory[productCategoryKey].products.push({
        id: product.id
      })
    }
  }

  return productsByCategory
}
