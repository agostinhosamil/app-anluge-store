import { Advertise } from '@prisma/client'
import { AdvertiseProps } from '~/Types/Advertise'
import { CategoryProps, CategoryWithProductId } from '~/Types/Category'
import { ProductProps, ProductWithId } from '~/Types/Product'
import { noEmpty, uploadedImageUrl } from '~/utils'

export function getAllCategoryProducts(
  category: CategoryProps | any
): Array<ProductProps> {
  const products: Array<ProductProps> = [
    ...(category.products instanceof Array ? category.products : [])
  ]

  if (category.categories instanceof Array) {
    for (const subCategory of category.categories) {
      products.push(...getAllCategoryProducts(subCategory))
    }
  }

  return products
}

export function getAllCategoryProductsWithIds(
  category: CategoryWithProductId | any
): Array<ProductWithId> {
  const products: Array<ProductWithId> = [
    ...(category.products instanceof Array ? category.products : [])
  ]

  if (category.categories instanceof Array) {
    for (const subCategory of category.categories) {
      products.push(...getAllCategoryProductsWithIds(subCategory))
    }
  }

  return products
}

export function resolveAdvertiseLinkUrl(
  advertise: Advertise | AdvertiseProps
): string {
  const urlSuffix = `?ref=ad-server-item&advertiseId=${advertise.id}&cliId={:userId}`

  if ('post' in advertise && advertise.post) {
    return `/blog/${advertise.post.slag}`
  }

  if ('product' in advertise && advertise.product) {
    return `/products/${advertise.product.slag.concat(urlSuffix)}`
  }

  if (noEmpty(advertise.link)) {
    return `${advertise.link.concat(urlSuffix)}`
  }

  return `/ad-server/click/${urlSuffix}`
}

export type AdvertiseImageVariant =
  | 'large'
  | 'normal'
  | 'small'
  | 'x-small'
  | 'xx-small'

export function resolveAdvertiseImageUrl(
  advertise: Advertise | AdvertiseProps,
  variant: AdvertiseImageVariant = 'large'
): string {
  if (noEmpty(advertise.banner)) {
    return uploadedImageUrl(`${advertise.banner.concat('@', variant)}`)
  }

  return uploadedImageUrl('image-placeholder')
}
