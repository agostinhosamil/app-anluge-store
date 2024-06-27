'use client'

import { Fragment } from 'react'

import { Container } from '@components/styled'
import { ProductCardPlaceHolder } from 'store@components/NewsFeed/ProductCardPlaceHolder'
import { range } from '~/utils'

import {
  AdPanel,
  CategoryCard,
  CategoryCardsWrapper,
  HomePageContainer,
  NewsFeedContainer,
  Title
} from './styles'

export const HomePagePlaceholder: React.FunctionComponent = () => {
  return (
    <Container>
      <HomePageContainer>
        <AdPanel />
        <Title />
        <CategoryCardsWrapper>
          {range(20).map(i => (
            <CategoryCard key={i}>
              <div />
            </CategoryCard>
          ))}
        </CategoryCardsWrapper>
        {range(4).map(i => (
          <Fragment key={i}>
            <Title />
            <NewsFeedContainer>
              {range(30).map(n => (
                <ProductCardPlaceHolder key={n} />
              ))}
            </NewsFeedContainer>
          </Fragment>
        ))}
      </HomePageContainer>
    </Container>
  )
}
