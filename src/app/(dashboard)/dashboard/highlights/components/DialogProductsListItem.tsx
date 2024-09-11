import { FaPlus } from 'react-icons/fa6'

import Image from '@components/Image'
import { useSelectable } from '@components/SelectableElement/hook'
import { ProductProps } from '~/Types/Product'
import { resolveProductImageUrl } from '~/utils'

import { cn } from '~/lib/utils'
import { useHighlights } from '../hook'

type DialogProductsListItemProps = {
  product: ProductProps
}

type DialogProductsListItemComponent =
  React.FunctionComponent<DialogProductsListItemProps>

export const DialogProductsListItem: DialogProductsListItemComponent = ({
  product
}) => {
  const { addHighlight } = useHighlights()

  const { inputProps, selected } = useSelectable()

  const highlightProductHandler = async (product: ProductProps) => {
    const highlighted = await addHighlight({
      product: product.id
    })

    if (highlighted) {
      return true
    }
  }

  const elementRefId = `dialog-products-list-checkbox-${product.id}`

  return (
    <div className="w-full p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="w-full rounded-lg flex flex-col gap-3 relative">
        <label
          className={cn(
            'absolute block left-0 top-0 p-2 w-full h-full cursor-pointer rounded-lg bg-opacity-45 transition-all',
            selected ? 'z-[1] bg-blue-500' : undefined
          )}
          htmlFor={elementRefId}
        >
          <div>
            <input {...inputProps} id={elementRefId} />
          </div>
        </label>
        <div className="w-full">
          <Image
            src={resolveProductImageUrl(product, 'small')}
            className="w-full border-0 outline-none rounded-lg shadow-lg"
            alt={product.name}
          />
        </div>
        <strong
          title={product.name}
          className="line-clamp-4 min-h-24 break-words whitespace-pre-wrap dark:text-zinc-200"
        >
          {product.name}
        </strong>
        <div className="w-full block relative">
          <button
            type="button"
            className="w-full flex flex-row gap-2 items-center justify-center border-0 outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-2 px-3 rounded-lg"
            onClick={() => {
              highlightProductHandler(product)
            }}
          >
            <FaPlus />
            <span>Destacar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
