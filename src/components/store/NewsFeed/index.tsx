import Carousel from 'react-bootstrap/Carousel'

import { Container } from '@components/styled'
import { range } from '~/utils'

import { CategoryProps } from '~/Types/Category'
import { AdvertisingPanel } from './AdvertisingPanel'
import { CategoryListSlider } from './CategoryListSlider'
import { CategoryProductsList } from './CategoryProductsList'
import { AdvertisingPanelContainer } from './styles'

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
      <CategoryListSlider categories={categories} />
      {categories.map(category => (
        <CategoryProductsList key={category.id} category={category} />
      ))}
    </Container>
  )
}
