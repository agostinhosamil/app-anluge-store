import { createContext, useContext, useState } from 'react'

import { empty, generateRandomId } from '~/utils'
import type {
  Base,
  Category,
  CategoryMassCreationFormContext,
  CategoryMassCreationFormContextUtils
} from './types'

const CategoryMassCreationFormContext =
  createContext<CategoryMassCreationFormContext>(
    {} as CategoryMassCreationFormContext
  )

type CategoryMassCreationFormContextProviderProps = {
  // value: Array<Category>
}

type CategoryMassCreationFormContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & CategoryMassCreationFormContextProviderProps
>

export const useCategoryMassCreationFormContext = () => {
  return useContext(CategoryMassCreationFormContext)
}

export const CategoryMassCreationFormContextProvider: CategoryMassCreationFormContextProviderComponent =
  props => {
    const [categories, setCategories] = useState<Array<Category>>([])

    const addCategory = (data: Base<Category>): void => {
      const id = generateRandomId()

      const category: Category = {
        ...data,
        id
      }

      setCategories([...categories, category])
    }

    const removeCategory = (categoryId: string): void => {
      setCategories(categories.filter(category => category.id !== categoryId))
    }

    const getCategoryChildren = (categoryId: string): Array<Category> => {
      return categories.filter(category => category.parentId === categoryId)
    }

    const categoryHasChildren = (categoryId: string): boolean => {
      return getCategoryChildren(categoryId).length >= 1
    }

    const addCategoryChild = (categoryId: string, child: Base<Category>) => {
      addCategory({ ...child, parentId: categoryId })
    }

    const categoryCrud: CategoryMassCreationFormContextUtils = {
      addCategory,
      setCategories,
      removeCategory,
      categoryHasChildren,
      getCategoryChildren,
      addCategoryChild,
      updateCategory(categoryId, data) {
        setCategories(
          categories.map(category => {
            if (category.id !== categoryId) {
              return category
            }

            return {
              ...category,
              ...data
            }
          })
        )
      },
      getAll(options): Array<Category> {
        if (options && options.includeAll) {
          return categories
        }

        return categories.filter(category => !category.parentId)
      },
      removeAll() {
        const currentCategoryList = categories

        setCategories([])

        return currentCategoryList
      },

      clean() {
        setCategories([])
      },

      categoryExists(categoryId) {
        return Boolean(categories.find(category => category.id === categoryId))
      },

      valid() {
        return (
          categories.length >= 1 &&
          !Boolean(categories.find(category => empty(category.title)))
        )
      }
    }

    return (
      <CategoryMassCreationFormContext.Provider
        value={{ categories, ...categoryCrud }}
      >
        {props.children}
      </CategoryMassCreationFormContext.Provider>
    )
  }
