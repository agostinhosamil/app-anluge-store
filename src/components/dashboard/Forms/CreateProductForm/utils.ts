import { $Enums } from '@prisma/client'

import {
  OptionProps,
  SelectFieldData
} from '@components/Form/SelectField/types'
import { CategoryProps } from 'Types/Category'
import { ProductProps } from '~/Types/Product'
import { range, uploadedImageUrl } from '~/utils'
import { categoryListToTree } from '~/utils/models/category'
import { ProductImages, ProductImagesFactory } from './types'

export const productImagesFactory: ProductImagesFactory = (
  quantity = 4,
  data = undefined
) => {
  let productMediasCount = 0
  const productImages: ProductImages = []

  if (data && data.medias instanceof Array && data.medias.length >= 1) {
    productMediasCount = data.medias.length

    data.medias.forEach(media => {
      productImages.push({
        file: null,
        id: media.id,
        fileUrl: uploadedImageUrl(media.fileName)
      })
    })
  }

  range(quantity - productMediasCount).forEach(i => {
    productImages.push({
      id: i,
      file: null
    })
  })

  return productImages
}

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

export const registeredProductMedia = (
  mediaId: string | number,
  product: ProductProps | undefined
): mediaId is string => {
  if (
    product &&
    product.medias instanceof Array &&
    product.medias.length >= 1
  ) {
    return product.medias.some(media => media.id === mediaId)
  }

  return false
}
