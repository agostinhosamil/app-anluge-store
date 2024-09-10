import {
  FaCartPlus,
  FaHeart,
  // FaMoneyBill,
  // FaTruck,
  FaStar
} from 'react-icons/fa6'

import Image from '@components/Image'
import { formatAmount, resolveProductImageUrl } from '~/utils'

import { QuickViewButton } from './buttons/QuickView'
import { ProductProps } from './types'

type ProductsListItemProps = {
  product: ProductProps
}

export const ProductsListItem = ({ product }: ProductsListItemProps) => {
  return (
    <div className="rounded-lg border-solid border-[1px] border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:!bg-zinc-900 [&_*]:select-none">
      <div className="h-max w-full">
        <a href="#" className="flex flex-row [&>img]:w-full">
          <Image
            className="mx-auto h-full rounded-lg"
            src={resolveProductImageUrl(product, 'normal')}
            alt={product.name}
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2  text-wrap whitespace-normal break-words rounded bg-zinc-200 px-2.5 py-0.5 text-[9px] font-medium text-zinc-800 dark:bg-gray-700 dark:text-zinc-200">
            {' '}
            Up to 35% off{' '}
          </span>

          <div className="flex items-center justify-end gap-1 [&_button]:outline-none [&_button]:border-0 [&_button]:bg-transparent">
            <QuickViewButton />

            <button
              type="button"
              data-tooltip-target="tooltip-add-to-favorites"
              className="rounded-lg px-2 pt-1 pb-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <i className="dark:text-gray-500">
                <FaHeart />
              </i>
            </button>
            <div
              id="tooltip-add-to-favorites"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Add to favorites
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        <a
          href={`/products/${product.slag}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white line-clamp-4 min-h-[90px]"
        >
          {product.name}
        </a>

        {product.rates.length >= 1 && (
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">
              5.0
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              (455)
            </p>
          </div>
        )}

        {/* <ul className="my-3 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <i className="dark:text-zinc-400">
              <FaTruck />
            </i>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Entregas rápidas
            </p>
          </li>

          <li className="flex items-center gap-2">
            <i className="dark:text-zinc-400">
              <FaMoneyBill />
            </i>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Melhor preço
            </p>
          </li>
        </ul> */}

        <div className="mt-4 flex items-center justify-center flex-wrap gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            {formatAmount(product.price)}
          </p>

          <button
            type="button"
            className="inline-flex justify-center w-full items-center rounded-lg bg-blue-700 px-3 gap-2 border-0 outline-none py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaCartPlus size={20} />
            <span className="text-xs text-nowrap">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
