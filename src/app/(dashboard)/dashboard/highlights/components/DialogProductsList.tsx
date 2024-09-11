import { LuCopy, LuCopyCheck } from 'react-icons/lu'

import { FlatList } from '@components/FlatList'
import { SelectableElement } from '@components/SelectableElement'
import { useSelectableGroup } from '@components/SelectableElementsGroup/hook'
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
  const { highlights, addHighlight } = useHighlights()
  const {
    selectedElements,
    isElementSelected,
    deselectElements,
    selectElements
  } = useSelectableGroup()

  const noHighlightedProducts = products.filter(
    ({ id }) => !highlights.products.some(({ product }) => id === product?.id)
  )

  const resolveTitle = (): string => {
    if (selectedElements.length < 1) {
      return 'Selecionar produtos'
    }

    return `Produtos selecionados - (${selectedElements.length})`
  }

  const areAllSelected = !noHighlightedProducts.some(
    product => !isElementSelected(product.id)
  )

  const selectAllButtonClickHandler = () => {
    const productIds = noHighlightedProducts.map(product => product.id)

    if (areAllSelected) {
      return deselectElements(productIds)
    }

    selectElements(productIds)
  }

  const highlightAllButtonClickHandler = () => {
    addHighlight({
      products: selectedElements.map(selectedElement =>
        String(selectedElement.id)
      )
    })
  }

  return (
    <div className="w-full block py-3">
      <FlatList
        showSearchBox
        loading={loading}
        paginationStyle="standard"
        data={noHighlightedProducts}
        title={resolveTitle()}
        renderItem={product => (
          <SelectableElement id={product.id}>
            <DialogProductsListItem product={product} />
          </SelectableElement>
        )}
      />
      {selectedElements.length >= 1 && (
        <div className="w-max max-w-md fixed flex flex-row gap-3 items-center bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow-lg border-solid border-[1px] border-zinc-300 dark:border-zinc-700 p-2 bottom-5 left-0 right-0 m-auto z-20">
          <strong className="text-sm dark:text-zinc-50 font-bold pl-3">
            Destacar Selecionados - ({selectedElements.length})
          </strong>
          <button
            type="button"
            className="px-3 py-2 rounded-lg border-0 outline-none bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-950 dark:active:bg-black text-zinc-50"
            title="Selecionar todos"
            onClick={selectAllButtonClickHandler}
          >
            {areAllSelected ? <LuCopy /> : <LuCopyCheck />}
          </button>
          <button
            type="button"
            className="px-3 py-2 rounded-lg border-0 outline-none bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-zinc-50"
            onClick={highlightAllButtonClickHandler}
          >
            Destacar
          </button>
        </div>
      )}
    </div>
  )
}
