import { range } from '~/utils'

import {
  OptionProps,
  SelectFieldData
} from '@components/Form/SelectField/types'
import { $Enums } from '@prisma/client'
import { CategoryProps } from 'Types/Category'
import { categoryListToTree } from '~/utils/models/category'
import { ProductImagesFactory } from './types'

export const productImagesFactory: ProductImagesFactory = (quantity = 4) =>
  range(quantity).map(i => ({
    id: i,
    file: null
  }))

export const resolveProductTypeKey = (
  productType: $Enums.ProductType
): string => {
  // PHYSICAL

  const productTypeKeys = [
    null,
    $Enums.ProductType.DIGITAL,
    $Enums.ProductType.PHYSICAL
  ]

  return String(productTypeKeys.indexOf(productType))
}

export const categoryListToSelectFieldData = (
  categories: Array<CategoryProps>
): SelectFieldData => {
  const categoriesTree = categoryListToTree(categories)

  const categoryObjectFactory = (category: CategoryProps): OptionProps => ({
    label: category.title,
    icon: 'FaObjectGroup',
    value: category.id,
    options: categoryChildrenToSelectFieldData(category.categories)
  })

  const categoryChildrenToSelectFieldData = (
    categoryChildren: Array<CategoryProps>
  ): SelectFieldData => {
    return categoryChildren.map(category => categoryObjectFactory(category))
  }

  return categoriesTree.map(category => categoryObjectFactory(category))
}
