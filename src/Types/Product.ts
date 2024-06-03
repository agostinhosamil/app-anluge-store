import { Prisma, Product } from '@prisma/client'
import { Category } from '~/components/dashboard/Forms/CategoryMassCreationForm/types'
import { CategoryInclude } from './Category'

export interface ProductInclude extends Prisma.ProductDefaultArgs {
  category: {
    include: CategoryInclude
  }
  faqs: true
  favorites: true
  medias: true
  tags: true
}

export type ProductProps = Prisma.ProductGetPayload<{
  include: ProductInclude
}>

export enum LoadingStockMap {
  STYLUS = 'product@loadingStockMap/stylus',
  KASPERSKY = 'product@loadingStockMap/kaspersky',
  MICROSOFT = 'product@loadingStockMap/microsoft'
}

export type StockMapLoaderResponse = {
  categories: Array<Category>
  products: Array<Product>
}

export type StockMapLoader<
  StockMapLoaderDataFormat extends Array<object> = any
> = (mapData: StockMapLoaderDataFormat) => StockMapLoaderResponse
