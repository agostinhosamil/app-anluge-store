import { Product } from '@prisma/client'
import { Category } from 'dashboard@components/Forms/CategoryMassCreationForm/types'
import { StockMapLoaderResponse } from '~/Types/Product'
import { categoryFactoryByTitle } from '~/utils/models/category'

export class StockMapLoaderResponseDataObject {
  public readonly categories: Array<Category> = []
  public readonly products: Array<Product> = []

  findCategory = (categoryTitle: string) => {
    return this.categories.find(category => category.title === categoryTitle)
  }

  storeCategory = (
    categoryTitle: string,
    categoryProps?: Partial<Category>
  ): Category => {
    const storedCategory = this.findCategory(categoryTitle)

    if (storedCategory) {
      return storedCategory
    }

    const category = categoryFactoryByTitle(categoryTitle, categoryProps)

    this.categories.push(category)

    return category
  }

  productExists = (productSku: string): boolean => {
    return Boolean(this.products.find(product => product.sku === productSku))
  }

  get data(): StockMapLoaderResponse {
    return {
      categories: this.categories,
      products: this.products
    }
  }
}
