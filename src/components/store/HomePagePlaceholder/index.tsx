'use client'

import { Fragment } from 'react'

import { Container } from '@components/styled'
import { range } from '~/utils'

import { CategorySectionPlaceholder } from './CategorySectionPlaceholder'
import {
  AdPanel,
  CategoryCard,
  CategoryCardsWrapper,
  HomePageContainer,
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
            <CategorySectionPlaceholder />
          </Fragment>
        ))}
      </HomePageContainer>
    </Container>
  )
}
