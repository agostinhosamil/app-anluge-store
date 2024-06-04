import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import { AdvertisingPanel } from './AdvertisingPanel'
import { CategoryCard } from './CategoryCard'
// import { ProductCard } from './ProductCard'
import { ProductCardPlaceHolder } from './ProductCardPlaceHolder'
import {
  AdvertisingPanelContainer,
  CategoryList,
  CategoryListWrapper,
  ProductsList,
  Title
} from './styles'

const range = (n: number = 10): number[] => {
  const arr = []

  let i = 0

  while (i++ < n) {
    arr.push(i)
  }

  return arr
}

export const NewsFeed: React.FunctionComponent = () => {
  return (
    <Container>
      <AdvertisingPanelContainer>
        <Carousel controls={false}>
          {range(40).map(i => (
            <Carousel.Item key={i}>
              <AdvertisingPanel
                image="image001.jpg"
                title="Uma poderosa solução para proteger os ativos da sua empresa"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </AdvertisingPanelContainer>
      <Title>Categorias recomendads</Title>
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
        {range(30).map(i => (
          <ProductCardPlaceHolder
            key={i}
            name={`Product ${i}`}
            image="/image004.png"
            description={`Lorem product ${i} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dignissimos recusandae earum vel consequatur repellendus, nostrum, vitae mollitia eos maxime inventore assumenda sunt quaerat magni porro alias impedit temporibus placeat.`}
          />
        ))}
      </ProductsList>
    </Container>
  )
}
