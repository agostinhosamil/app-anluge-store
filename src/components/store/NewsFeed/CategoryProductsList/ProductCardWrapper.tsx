import { ProductWithId } from '~/Types/Product'
import { getProductDataBySlag } from '~/utils/product'
import { ProductCard } from '../ProductCard'

type ProductCardWrapperProps = {
  product: ProductWithId
}

type ProductCardWrapperComponent =
  React.FunctionComponent<ProductCardWrapperProps>

export const ProductCardWrapper: ProductCardWrapperComponent = async props => {
  const { id } = props.product

  const product = await getProductDataBySlag(id)

  if (!product) {
    return null
  }

  return <ProductCard product={product} />
}
