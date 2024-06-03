import { Category } from '@prisma/client'

export type CategoryProps = Category & {
  subcategories: Array<CategoryProps>
}
