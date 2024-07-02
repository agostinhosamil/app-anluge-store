import { Fragment } from 'react'

import { FlatListProps } from '~/components/FlatList'
import { CategoryProps, CategoryWithProductId } from '~/Types/Category'
import { getCategoryDataById } from '~/utils/category'
import { getCategoryChildrenById } from '~/utils/newsFeed'

import { ProductCardProps } from '../ProductCard'
import { CategoryProductsListContent } from './content'

type CategoryProductsListProps = {
  category: CategoryProps | CategoryWithProductId
  title?: string
  productCardProps?: Partial<ProductCardProps>
  flatListProps?: Partial<FlatListProps>
}

type CategoryProductsListComponent =
  React.FunctionComponent<CategoryProductsListProps>

export const CategoryProductsList: CategoryProductsListComponent = async ({
  category,
  ...props
}) => {
  const categoryData = await getCategoryDataById(category.id)

  if (!categoryData) {
    return <h1>No found category {category.id}</h1>
  }

  const categoryWithChildren = await getCategoryChildrenById(categoryData)

  // console.log(
  //   'categoryWithChildren => ',
  //   getAllCategoryProducts(categoryWithChildren)
  // )

  return (
    <Fragment>
      <CategoryProductsListContent {...props} category={categoryWithChildren} />

      {/* <h1>ID: {categoryWithChildren.id}</h1> */}
    </Fragment>
  )
}
