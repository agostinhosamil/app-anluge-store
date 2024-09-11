'use client'

import { FaX } from 'react-icons/fa6'

import { Image } from '@components/Image'
import { resolveProductImageUrl } from '~/utils'

import { useHighlights } from '../hook'
import { HighlightProductInput } from '../types'

export const ProductsList: React.FunctionComponent = () => {
  const { highlights, removeHighlight } = useHighlights()

  const removeButtonClickHandler = async (highlight: HighlightProductInput) => {
    await removeHighlight(highlight)
  }

  if (highlights.products.length < 1) {
    return null
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <h2 className="dark:text-zinc-300 dark:font-extrabold">
        Produtos em destaque na loja
      </h2>
      <ul className="w-full flex flex-row flex-wrap">
        {highlights.products.map(
          ({ product }) =>
            product && (
              <li
                key={product.id}
                className="w-full pr-2 pb-2 md:w-1/2 lg:w-1/3 xl:w-1/4 flex-grow flex flex-col"
              >
                <div className="rounded-lg w-full flex-grow flex flex-col justify-between gap-3 p-4 bg-zinc-100 dark:bg-zinc-900">
                  <div className="w-full flex flex-col gap-3">
                    <div className="bg-zinc-300 dark:bg-zinc-800 rounded-lg w-full">
                      <Image
                        className="w-full rounded-lg border-0 outline-none bg-transparent"
                        src={resolveProductImageUrl(product)}
                        alt={product.name}
                      />
                    </div>
                    <strong className="dark:text-zinc-50 font-bold text-center break-words whitespace-pre-wrap">
                      {product.name}
                    </strong>
                  </div>
                  <div className="w-full flex justify-center flex-row gap-3">
                    <button
                      className="rounded-lg border-0 outline-none bg-red-400 hover:bg-red-500 active:bg-red-600 text-zinc-50 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800 py-2 px-3 flex flex-row gap-2 items-center"
                      onClick={() =>
                        removeButtonClickHandler({
                          product: product.id
                        })
                      }
                    >
                      <FaX />
                      <span className="text-sm">Remover dos destaques</span>
                    </button>
                  </div>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
