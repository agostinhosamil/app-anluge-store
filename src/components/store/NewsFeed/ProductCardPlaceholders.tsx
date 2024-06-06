import { range } from '~/utils'
import { ProductCardPlaceHolder } from './ProductCardPlaceHolder'

export const ProductCardPlaceholders = () =>
  range(30).map(i => (
    <ProductCardPlaceHolder
      key={i}
      name={`Product ${i}`}
      image="/image004.png"
      description={`.`}
    />
  ))
