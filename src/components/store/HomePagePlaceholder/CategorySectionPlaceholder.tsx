'use client'

import { Fragment } from 'react'

import { ProductCardPlaceHolder } from 'store@components/NewsFeed/ProductCardPlaceHolder'
import { range } from '~/utils'

import { NewsFeedContainer, Title } from './styles'

export const CategorySectionPlaceholder = () => (
  <Fragment>
    <Title />
    <NewsFeedContainer>
      {range(30).map(n => (
        <ProductCardPlaceHolder key={n} />
      ))}
    </NewsFeedContainer>
  </Fragment>
)
