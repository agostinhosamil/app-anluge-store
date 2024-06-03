import { useEffect, useState } from 'react'

import { getCategories } from '@utils/models/category'
import { CategoryProps } from 'Types/Category'

export const useCategory = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [categories, setCategories] = useState<Array<CategoryProps>>([])

  useEffect(() => {
    const effectHandler = async () => {
      const categories = await getCategories()

      if (categories instanceof Array && categories.length >= 1) {
        setCategories(categories)
      }

      setLoading(false)
    }

    effectHandler()
  }, [])

  return {
    categories,
    loading,

    addCategory(category: CategoryProps) {
      setCategories([...categories, category])
    },

    updateCategory(categoryId: string, data: Partial<CategoryProps>) {
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

    deleteCategory(categoryId: string) {
      setCategories(categories.filter(category => category.id !== categoryId))
    }
  }
}
