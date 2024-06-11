import { SelectList } from 'dashboard@components/SelectList'
import { ProductProps } from '~/Types/Product'
import { useProduct } from '~/utils/hooks/useProduct'

type ProductSelectListProps = {
  onLoadEnd?: () => void
  onSelect?: (product: ProductProps) => void | Promise<void>
}

type ProductSelectListComponent =
  React.FunctionComponent<ProductSelectListProps>

export const ProductSelectList: ProductSelectListComponent = props => {
  const { products, loading } = useProduct()

  return (
    <SelectList
      {...props}
      data={products}
      loading={loading}
      map={products =>
        products.map(product => ({
          id: product.id,
          title: product.name,
          subTitle: product.category?.title || product.slag,
          data: product
        }))
      }
    />
  )
}
