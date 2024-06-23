import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { FlatList } from '@components/FlatList'
import { Container } from '@components/styled'
import { range } from '~/utils'

import { AdvertisingPanel } from './AdvertisingPanel'
// import { ProductCard } from './ProductCard'
import { Slide, TouchSlider } from '~/components/TouchSlider'
import { CategoryProps } from '~/Types/Category'
import { ProductProps } from '~/Types/Product'
import { CategoryCard } from './CategoryCard'
import { ProductCard } from './ProductCard'
import { ProductCardPlaceholders } from './ProductCardPlaceholders'
import {
  AdvertisingPanelContainer,
  CategoryList,
  CategoryListWrapper,
  ProductsList,
  Title
} from './styles'

type NewsFeedProps = {
  categories: Array<CategoryProps>
}

function getAllCategoryProducts(
  category: CategoryProps | any
): Array<ProductProps> {
  const products: Array<ProductProps> = [
    ...(category.products instanceof Array ? category.products : [])
  ]

  if (category.categories instanceof Array) {
    for (const subCategory of category.categories) {
      products.push(...getAllCategoryProducts(subCategory))
    }
  }

  return products
}

export const NewsFeed: React.FunctionComponent<NewsFeedProps> = props => {
  // const { products, ...productsState } = useProduct()

  const { categories } = props

  return (
    <Container>
      <AdvertisingPanelContainer>
        <Carousel controls={false}>
          {range(1).map(i => (
            <Carousel.Item key={i}>
              <AdvertisingPanel
                image="image001.jpg"
                title="Uma poderosa solução para proteger os ativos da sua empresa"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </AdvertisingPanelContainer>
      <Title>Categorias recomendadas</Title>
      <CategoryListWrapper>
        <CategoryList>
          <TouchSlider>
            {categories.map(category => (
              <Slide key={category.id}>
                <CategoryCard {...category} />
              </Slide>
            ))}
          </TouchSlider>
        </CategoryList>
      </CategoryListWrapper>
      {categories.map(category => {
        const products = getAllCategoryProducts(category)

        if (products.length < 1) {
          return <Fragment key={category.id} />
        }

        return (
          <Fragment key={category.id}>
            <Title>{category.title}</Title>
            <ProductsList>
              {/* {(productsState.loading && <ProductCardPlaceholders />) ||
                  products.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))} */}
              <FlatList
                data={products}
                loading={false}
                renderItemPlaceholder={() => <ProductCardPlaceholders />}
                paginationStyle="standard"
                showSearchBox={false}
                renderItem={product => <ProductCard product={product} />}
              />
            </ProductsList>
          </Fragment>
        )
      })}
    </Container>
  )
}
