import { range } from '~/utils'

import { ProductImagesFactory } from './types'

export const productImagesFactory: ProductImagesFactory = (quantity = 4) =>
  range(quantity).map(i => ({
    id: i,
    file: null
  }))
