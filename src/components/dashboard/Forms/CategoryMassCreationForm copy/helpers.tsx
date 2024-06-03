import { Fragment } from 'react'

import { CategoryProps } from './types'

import { generateRandomId } from '~/utils'
import { CategoryInputField } from './CategoryInputField'

export const renderCategories = (
  categories: Array<CategoryProps>
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
  data: Partial<CategoryProps> = {}
): CategoryProps => {
  const now = new Date(Date.now())
  const categoryId = generateRandomId()

  const defaultProps: CategoryProps = {
    title: '',
    description: '',
    icon: null,
    id: categoryId,
    slag: '',
    createdAt: now,
    updatedAt: now,
    parentId: '',
    subcategories: []
  }

  return {
    ...defaultProps,
    ...data
  }
}
