import { Fragment } from 'react'

import { Base, Category } from './types'

import { CategoryInputField } from './CategoryInputField'

export const renderCategories = (
  categories: Array<Category>
): React.ReactNode => {
  return (
    <Fragment>
      {categories.map(category => (
        <CategoryInputField key={category.id} data={category} />
      ))}
    </Fragment>
  )
}

export const categoryFactory = (
  data: Partial<Category> = {}
): Base<Category> => {
  const defaultProps: Base<Category> = {
    title: '',
    description: '',
    icon: null,
    slag: '',
    parentId: null
  }

  return {
    ...defaultProps,
    ...data
  }
}
