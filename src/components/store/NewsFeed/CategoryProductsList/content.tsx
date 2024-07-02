// 'use client'

import { Fragment, Suspense } from 'react'

import { FlatList, FlatListProps } from '~/components/FlatList/server'
import { CategoryProps, CategoryWithProductId } from '~/Types/Category'
// import { noEmpty } from '~/utils'

import { ProductCardProps } from '../ProductCard'
import { ProductCardPlaceholders } from '../ProductCardPlaceholders'
// import { ProductsList, Title } from '../styles'
import { Spinner } from 'react-bootstrap'
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
  async ({ category, ...props }) => {
    const products = getAllCategoryProductsWithIds(category)

    if (products.length < 1) {
      return <Fragment />
    }

    const productCardProps = props.productCardProps || {}
    const flatListProps = props.flatListProps || {}

    return (
      <Fragment key={category.id}>
        <h1>
          {/* {noEmpty(props.title)
            ? props.title.replaceAll('$0', category.title)
            : category.title} */}
          Category Title Here
        </h1>
        <div>
          <FlatList
            data={products}
            loading={false}
            renderItemPlaceholder={async () => {
              'use server'

              return (
                <Suspense>
                  <ProductCardPlaceholders />
                </Suspense>
              )
            }}
            paginationStyle="standard"
            showSearchBox={false}
            {...flatListProps}
            renderItem={async product => {
              'use server'

              return (
                <Suspense
                  fallback={
                    <span>
                      Loading product <Spinner size="sm" />
                    </span>
                  }
                >
                  <ProductCardWrapper {...productCardProps} product={product} />
                </Suspense>
              )
            }}
          />
        </div>
      </Fragment>
    )
  }
