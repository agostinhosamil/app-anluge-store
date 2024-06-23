import { CategoryProps } from '~/Types/Category'
import { ProductProps } from '~/Types/Product'

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
