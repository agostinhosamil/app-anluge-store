import Carousel from 'react-bootstrap/Carousel'

import { Container } from '@components/styled'
import { range } from '~/utils'

import { AdvertisingPanel } from './AdvertisingPanel'
// import { ProductCard } from './ProductCard'
import { Slide, TouchSlider } from '~/components/TouchSlider'
import { CategoryProps } from '~/Types/Category'
import { CategoryCard } from './CategoryCard'
import { CategoryProductsList } from './CategoryProductsList'
import {
  AdvertisingPanelContainer,
  CategoryList,
  CategoryListWrapper,
  Title
} from './styles'

type NewsFeedProps = {
  categories: Array<CategoryProps>
}

export const NewsFeed: React.FunctionComponent<NewsFeedProps> = props => {
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
      {categories.map(category => (
        <CategoryProductsList key={category.id} category={category} />
      ))}
    </Container>
  )
}
