'use client'

import { FaX } from 'react-icons/fa6'

import Image from '@components/Image'
import { uploadedImageUrl } from '~/utils'

import { useHighlights } from '../hook'
import { HighlightCategoryInput } from '../types'

export const CategoriesList: React.FunctionComponent = () => {
  const { highlights, removeHighlight } = useHighlights()

  const removeButtonClickHandler = (highlight: HighlightCategoryInput) => {
    removeHighlight(highlight)
  }

  return (
    <ul className="w-full flex flex-row flex-wrap">
      {highlights.categories.map(
        ({ category }) =>
          category && (
            <li
              key={category.id}
              className="w-full pr-2 pb-2 md:w-1/2 xl:w-1/3 flex-grow"
            >
              <div className="rounded-lg w-full flex-grow flex flex-col gap-3 p-4 bg-zinc-100 dark:bg-zinc-900">
                <div className="bg-zinc-300 dark:bg-zinc-800 rounded-lg w-full">
                  <Image
                    className="w-full rounded-lg border-0 outline-none bg-transparent"
                    src={uploadedImageUrl(category.banner, 'medium')}
                    alt={category.title}
                  />
                </div>
                <strong className="dark:text-zinc-50 font-bold text-center">
                  {category.title}
                </strong>
                <div className="w-full flex justify-center flex-row gap-3">
                  <button
                    className="rounded-lg border-0 outline-none bg-red-400 hover:bg-red-500 active:bg-red-600 text-zinc-50 dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800 py-2 px-3 flex flex-row gap-2 items-center"
                    onClick={() =>
                      removeButtonClickHandler({
                        category: category.id
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
  )
}
