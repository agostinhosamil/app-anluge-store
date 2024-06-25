import { Prisma } from '@prisma/client'
import { ProductInclude } from './Product'

export interface CategoryInclude extends Prisma.CategoryDefaultArgs {
  products: {
    include: ProductInclude
  }
  categories: {
    include: {
      products: true
      categories: true
    }
  }
}

export type CategoryProps = Omit<
  Prisma.CategoryGetPayload<{
    include: CategoryInclude
  }>,
  'include' | 'select'
>

export interface CategoryFormPropsInclude extends Prisma.CategoryDefaultArgs {
  categories: {
    include: CategoryFormPropsInclude
  }
}

export type CategoryFormProps = Prisma.CategoryGetPayload<{
  select: {
    icon: true
    title: true
    description: true
    parentId: true
    slag: true
    id?: true
  }
}>
