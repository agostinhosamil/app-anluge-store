import { Category as CategoryProps } from '@prisma/client'

export type Category = Omit<CategoryProps, 'createdAt' | 'updatedAt'>

export type Base<Model> = Omit<Model, 'id'> & {
  id?: string
}

export type CategoryMassCreationFormContextGetAllOptions = {
  includeAll?: true
}

export type CategoryMassCreationFormContextUtils = {
  addCategory: (data: Base<Category>) => void
  setCategories: React.Dispatch<React.SetStateAction<Base<Array<Category>>>>
  updateCategory: (categoryId: string, data: Partial<Base<Category>>) => void
  addCategoryChild: (categoryId: string, child: Base<Category>) => void
  removeCategory: (categoryId: string) => void
  categoryHasChildren: (categoryId: string) => boolean
  getCategoryChildren: (categoryId: string) => Array<Category>
  categoryExists: (categoryId: string) => boolean
  clean: () => void
  valid: () => boolean
  removeAll: () => Array<Category>
  getAll: (
    options?: CategoryMassCreationFormContextGetAllOptions
  ) => Array<Category>
}

export type CategoryMassCreationFormContext =
  CategoryMassCreationFormContextUtils & {
    categories: Array<Category>
  }
