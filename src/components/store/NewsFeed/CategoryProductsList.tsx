import { Fragment } from 'react'
import { FlatList, FlatListProps } from '~/components/FlatList'
import { CategoryProps } from '~/Types/Category'
import { noEmpty } from '~/utils'
import { ProductCard, ProductCardProps } from './ProductCard'
import { ProductCardPlaceholders } from './ProductCardPlaceholders'
import { ProductsList, Title } from './styles'
import { getAllCategoryProducts } from './utils'

type CategoryProductsListProps = {
  category: CategoryProps
  title?: string
  productCardProps?: Partial<ProductCardProps>
  flatListProps?: Partial<FlatListProps>
}

type CategoryProductsListComponent =
  React.FunctionComponent<CategoryProductsListProps>

export const CategoryProductsList: CategoryProductsListComponent = ({
  category,
  ...props
}) => {
  const products = getAllCategoryProducts(category)

  if (products.length < 1) {
    return <Fragment />
  }

  const productCardProps = props.productCardProps || {}
  const flatListProps = props.flatListProps || {}

  return (
    <Fragment key={category.id}>
      <Title>
        {noEmpty(props.title)
          ? props.title.replaceAll('$0', category.title)
          : category.title}
      </Title>
      <ProductsList>
        <FlatList
          data={products}
          loading={false}
          renderItemPlaceholder={() => <ProductCardPlaceholders />}
          paginationStyle="standard"
          showSearchBox={false}
          {...flatListProps}
          renderItem={product => (
            <ProductCard {...productCardProps} product={product} />
          )}
        />
      </ProductsList>
    </Fragment>
  )
}
