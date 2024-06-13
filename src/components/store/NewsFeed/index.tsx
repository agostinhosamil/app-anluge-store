import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import { FlatList } from '@components/FlatList'
import { range } from '~/utils'

import { AdvertisingPanel } from './AdvertisingPanel'
import { CategoryCard } from './CategoryCard'
// import { ProductCard } from './ProductCard'
import { useProduct } from '~/utils/hooks/useProduct'
import { ProductCard } from './ProductCard'
import { ProductCardPlaceholders } from './ProductCardPlaceholders'
import {
  AdvertisingPanelContainer,
  CategoryList,
  CategoryListWrapper,
  ProductsList,
  Title
} from './styles'

export const NewsFeed: React.FunctionComponent = () => {
  const { products, ...productsState } = useProduct()

  return (
    <Container>
      <AdvertisingPanelContainer>
        <Carousel controls={false}>
          {range(5).map(i => (
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
          <CategoryCard
            title="Equipamentos de escrtório"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non voluptatibus suscipit sint, sed similique dicta sapiente harum nesciunt libero blanditiis pariatur eos odio et praesentium dolores ullam beatae facere?"
          />
          <CategoryCard
            title="Equipamentos de escrtório"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non voluptatibus suscipit sint, sed similique dicta sapiente harum nesciunt libero blanditiis pariatur eos odio et praesentium dolores ullam beatae facere?"
          />
          <CategoryCard
            title="Equipamentos de escrtório"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non voluptatibus suscipit sint, sed similique dicta sapiente harum nesciunt libero blanditiis pariatur eos odio et praesentium dolores ullam beatae facere?"
          />
          <CategoryCard
            title="Equipamentos de escrtório"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non voluptatibus suscipit sint, sed similique dicta sapiente harum nesciunt libero blanditiis pariatur eos odio et praesentium dolores ullam beatae facere?"
          />
          <CategoryCard
            title="Equipamentos de escrtório"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non voluptatibus suscipit sint, sed similique dicta sapiente harum nesciunt libero blanditiis pariatur eos odio et praesentium dolores ullam beatae facere?"
          />
        </CategoryList>
      </CategoryListWrapper>
      <Title>Populares</Title>
      <ProductsList>
        {/* {(productsState.loading && <ProductCardPlaceholders />) ||
          products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))} */}
        <FlatList
          data={products}
          loading={productsState.loading}
          renderItemPlaceholder={() => <ProductCardPlaceholders />}
          paginationStyle="standard"
          showSearchBox={false}
          renderItem={product => <ProductCard {...product} />}
        />
      </ProductsList>
    </Container>
  )
}
