import { Prisma, Product } from '@prisma/client'
import { Category } from '~/components/dashboard/Forms/CategoryMassCreationForm/types'
import { CategoryInclude } from './Category'

export interface ProductInclude extends Prisma.ProductDefaultArgs {
  category: {
    include: CategoryInclude
  }
  faqs: true
  favorites: {
    include: {
      user: true
    }
  }
  medias: true
  tags: true
  rates: {
    include: {
      user: true
      medias: true
    }
  }
}

export type ProductProps = Omit<
  Prisma.ProductGetPayload<{
    include: ProductInclude
  }>,
  'include' | 'select'
>

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
