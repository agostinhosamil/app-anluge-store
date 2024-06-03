import { Prisma } from '@prisma/client'
import { ProductInclude } from './Product'

export interface CategoryInclude extends Prisma.CategoryDefaultArgs {
  products: {
    include: ProductInclude
  }
  categories: {
    include: CategoryInclude
  }
}

export type CategoryProps = Prisma.CategoryGetPayload<{
  include: CategoryInclude
}>

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
