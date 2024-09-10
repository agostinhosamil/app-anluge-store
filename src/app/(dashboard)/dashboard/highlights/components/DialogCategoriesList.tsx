import { FlatList } from '@components/FlatList'
import { useCategory } from '@utils/hooks/useCategory'

import { useHighlights } from '../hook'
import { HighlightCategory } from '../types'
import { DialogCategoriesListItem } from './DialogCategoriesListItem'

type DialogCategoriesListProps = {
  highlightedCategories: Array<HighlightCategory>
}

type DialogCategoriesListComponent =
  React.FunctionComponent<DialogCategoriesListProps>

export const DialogCategoriesList: DialogCategoriesListComponent = () => {
  const { categories, loading } = useCategory()

  const { highlights } = useHighlights()

  const noHighlightedCategories = categories.filter(
    ({ id }) =>
      !highlights.categories.some(({ category }) => id === category?.id)
  )

  return (
    <div className="w-full block py-3">
      <FlatList
        showSearchBox
        loading={loading}
        paginationStyle="standard"
        data={noHighlightedCategories}
        renderItem={category => (
          <DialogCategoriesListItem category={category} />
        )}
      />
    </div>
  )
}
