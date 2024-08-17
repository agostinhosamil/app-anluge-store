'use client'

import { useEffect, useState } from 'react'

import { CategorySectionPlaceholder } from 'store@components/HomePagePlaceholder/CategorySectionPlaceholder'
import { CategoryProductsList } from 'store@components/NewsFeed/CategoryProductsList'
import { CategoryWithProductId } from 'Types/Category'
import { axios } from '~/services/axios'

type CategorySectionProps = {
  categorySlag: string
}

type CategorySectionComponent = React.FunctionComponent<
  React.PropsWithChildren & CategorySectionProps
>

export const CategorySection: CategorySectionComponent = props => {
  // const [error, setError] = useState<boolean>(false)
  const [category, setCategory] = useState<CategoryWithProductId>()

  useEffect(() => {
    const effectHandler = async () => {
      const response = await axios.get<CategoryWithProductId>(
        `/categories/${props.categorySlag}/products-with-id`
      )

      if (typeof response.data === 'object' && response.data.id) {
        setCategory(response.data)
      }
    }

    try {
      effectHandler()
    } catch (err) {
      return
    }
  })

  if (!category) {
    return <CategorySectionPlaceholder />
  }

  // const category: CategoryWithProductId =
  //   await getCategoryChildrenById(categoryData)

  return (
    <CategoryProductsList
      flatListProps={{
        itemsCountPerIteration: 15,
        placeholderCountOnLoading: 15
      }}
      category={category}
    />
  )
}
