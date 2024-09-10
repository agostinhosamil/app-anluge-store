import { FaPlus } from 'react-icons/fa6'

import Image from '@components/Image'
import { ProductProps } from '~/Types/Product'
import { resolveProductImageUrl } from '~/utils'

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

  const highlightProductHandler = async (product: ProductProps) => {
    const highlighted = await addHighlight({
      product: product.id
    })

    if (highlighted) {
      return true
    }
  }

  return (
    <div className="w-full p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="w-full rounded-lg flex flex-col gap-3">
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
        <div className="w-full block">
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
