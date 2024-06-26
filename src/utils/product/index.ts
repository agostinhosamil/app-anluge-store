import { $Enums, Product } from '@prisma/client'

import { generateSlagByTitle } from '@utils/generateSlagByTitle'
import { empty, generateRandomId } from '~/utils'
import { categoryIncludeFactory } from '../category'

import { ProductInclude, ProductProps } from 'Types/Product'
import { prisma } from '~/services/prisma'

// import { empty } from '~/utils'
// import { generateSlagByTitle } from '~/utils/generateSlagByTitle'

export const productIncludeFactory = (): ProductInclude => {
  const include: ProductInclude = {
    category: {
      include: categoryIncludeFactory()
    },
    faqs: true,
    favorites: {
      include: {
        user: true
      }
    },
    medias: true,
    tags: true,
    rates: {
      include: {
        medias: true,
        user: true
      }
    }
  }

  // include.products = {
  //   include
  // }

  return include
}

export const setProductDefaultProps = (product: Product): Product => {
  if (empty(product.slag)) {
    product.slag = generateSlagByTitle(product.name)
  }

  if (empty(product.code)) {
    product.code = generateRandomId()
  }

  // product.sku = (product.sku || generateRandomId()).slice(0, 8)

  product.type = resolveProductType(product.type)
  product.price = parseFloat(String(product.price))
  product.stock =
    product.stock && !isNaN(product.stock) ? Number(product.stock) : -1

  return product
}

export const resolveProductType = (type: string): $Enums.ProductType => {
  const productTypesMap: Array<$Enums.ProductType> = ['DIGITAL', 'PHYSICAL']

  if (isNaN(Number(type))) {
    return 'PHYSICAL'
  }

  const typeId = parseInt(type) - 1

  return productTypesMap[typeId] || 'PHYSICAL'
}

export const getProductDataBySlag = async (
  slag: string
): Promise<ProductProps | null> => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        OR: [
          {
            id: slag
          },
          {
            slag
          }
        ]
      },
      include: productIncludeFactory()
    })

    return product
  } catch (err) {
    return null
  }
}
