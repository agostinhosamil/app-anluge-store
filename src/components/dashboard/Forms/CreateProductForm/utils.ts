import { range } from '~/utils'

import { $Enums } from '@prisma/client'
import { ProductImagesFactory } from './types'

export const productImagesFactory: ProductImagesFactory = (quantity = 4) =>
  range(quantity).map(i => ({
    id: i,
    file: null
  }))

export const resolveProductTypeKey = (
  productType: $Enums.ProductType
): string => {
  // PHYSICAL

  const productTypeKeys = [
    null,
    $Enums.ProductType.DIGITAL,
    $Enums.ProductType.PHYSICAL
  ]

  return String(productTypeKeys.indexOf(productType))
}
