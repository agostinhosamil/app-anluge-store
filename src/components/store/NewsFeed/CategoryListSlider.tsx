'use client'

import { Fragment } from 'react'

import { Category } from '@prisma/client'
import { Slide, TouchSlider } from '~/components/TouchSlider'
import { CategoryProps } from '~/Types/Category'
import { noEmpty } from '~/utils'
import { CategoryCard } from './CategoryCard'
import { CategoryList, CategoryListWrapper, Title } from './styles'

type CategoryListSliderProps = {
  categories: Array<CategoryProps | Category>
  title?: string
}

type CategoryListSliderComponent =
  React.FunctionComponent<CategoryListSliderProps>

export const CategoryListSlider: CategoryListSliderComponent = props => {
  return (
    <Fragment>
      <Title>
        {noEmpty(props.title) ? props.title : 'Categorias recomendadas'}
      </Title>
      <CategoryListWrapper>
        <CategoryList>
          <TouchSlider showButtons showIndicators>
            {props.categories.map(category => (
              <Slide key={category.id}>
                <CategoryCard {...category} />
              </Slide>
            ))}
          </TouchSlider>
        </CategoryList>
      </CategoryListWrapper>
    </Fragment>
  )
}
