import { FaPlus } from 'react-icons/fa6'

import Image from '@components/Image'
import { CategoryProps } from 'Types/Category'
import { resolveCategoryImageUrl } from '~/utils'

import { useHighlights } from '../hook'

type DialogCategoriesListItemProps = {
  category: CategoryProps
}

type DialogCategoriesListItemComponent =
  React.FunctionComponent<DialogCategoriesListItemProps>

export const DialogCategoriesListItem: DialogCategoriesListItemComponent = ({
  category
}) => {
  const { addHighlight } = useHighlights()

  const highlightCategoryHandler = async (category: CategoryProps) => {
    const highlighted = await addHighlight({
      category: category.id
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
            src={resolveCategoryImageUrl(category, 'icon@small')}
            className="w-full border-0 outline-none rounded-full shadow-lg"
            alt={category.title}
          />
        </div>
        <strong
          title={category.title}
          className="line-clamp-2 min-h-12 text-center break-words whitespace-pre-wrap dark:text-zinc-200"
        >
          {category.title}
        </strong>
        <div className="w-full block">
          <button
            type="button"
            className="w-full flex flex-row gap-2 items-center justify-center border-0 outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-2 px-3 rounded-lg"
            onClick={() => {
              highlightCategoryHandler(category)
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
