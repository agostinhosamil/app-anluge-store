import { FlatList } from '@components/FlatList'
import { useProduct } from '@utils/hooks/useProduct'

import { useHighlights } from '../hook'
import { HighlightProduct } from '../types'
import { DialogProductsListItem } from './DialogProductsListItem'

type DialogProductsListProps = {
  highlightedProducts: Array<HighlightProduct>
}

type DialogProductsListComponent =
  React.FunctionComponent<DialogProductsListProps>

export const DialogProductsList: DialogProductsListComponent = () => {
  const { products, loading } = useProduct()

  const { highlights } = useHighlights()

  const noHighlightedProducts = products.filter(
    ({ id }) => !highlights.products.some(({ product }) => id === product?.id)
  )

  return (
    <div className="w-full block py-3">
      <FlatList
        showSearchBox
        loading={loading}
        paginationStyle="standard"
        data={noHighlightedProducts}
        title="Selecionar produtos"
        renderItem={product => <DialogProductsListItem product={product} />}
      />
    </div>
  )
}
