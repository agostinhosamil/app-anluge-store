'use client'

import { range } from '~/utils'
import { ProductCardPlaceHolder } from './ProductCardPlaceHolder'

export const ProductCardPlaceholders = () =>
  range(30).map(i => <ProductCardPlaceHolder key={i} />)
