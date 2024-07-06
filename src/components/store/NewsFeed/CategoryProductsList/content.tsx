'use client'

import { Fragment } from 'react'

import { FlatList, FlatListProps } from '~/components/FlatList'
import { CategoryProps, CategoryWithProductId } from '~/Types/Category'
// import { noEmpty } from '~/utils'

import { ProductCardProps } from '../ProductCard'
// import { ProductsList, Title } from '../styles'
import { noEmpty } from '~/utils'
import { ProductCardPlaceHolder } from '../ProductCardPlaceHolder'
import { getAllCategoryProductsWithIds } from '../utils'
import { ProductCardWrapper } from './ProductCardWrapper'

type CategoryProductsListContentProps = {
  category: CategoryProps | CategoryWithProductId
  title?: string
  productCardProps?: Partial<ProductCardProps>
  flatListProps?: Partial<FlatListProps>
}

type CategoryProductsListContentComponent =
  React.FunctionComponent<CategoryProductsListContentProps>

export const CategoryProductsListContent: CategoryProductsListContentComponent =
  ({ category, ...props }) => {
    const products = getAllCategoryProductsWithIds(category)

    if (products.length < 1) {
      return <Fragment />
    }

    const productCardProps = props.productCardProps || {}
    const flatListProps = props.flatListProps || {}

    return (
      <Fragment key={category.id}>
        <h1 className="text-pretty font-light uppercase">
          {noEmpty(props.title)
            ? props.title.replaceAll('$0', category.title)
            : category.title}
          {/* Category Title Here */}
        </h1>
        <div>
          <FlatList
            data={products}
            loading={false}
            renderItemPlaceholder={() => <ProductCardPlaceHolder />}
            paginationStyle="standard"
            showSearchBox={false}
            {...flatListProps}
            renderItem={product => (
              <ProductCardWrapper {...productCardProps} product={product} />
            )}
          />
        </div>
      </Fragment>
    )
  }
