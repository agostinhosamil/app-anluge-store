import { axios } from '@services/axios'
import { AxiosResponse } from 'axios'
import { Category } from '~/components/dashboard/Forms/CategoryMassCreationForm/types'
import { CategoryProps } from '~/Types/Category'
import { arrayMerge, arraySplit, generateRandomId } from '~/utils'
import { generateSlagByTitle } from '~/utils/generateSlagByTitle'

export const createCategoryByFormData = async (
  formData: FormData
): Promise<CategoryProps | null> => {
  try {
    const response = await axios.post<CategoryProps>(
      '/store/categories',
      formData
    )

    const createdCategory = response.data

    if (response.status === 200 && createdCategory.id) {
      return createdCategory
    }
  } catch (err) {
    // pass
  }

  return null
}

export const massStoreCategories = async (
  categories: Array<Category>
): Promise<Array<Category> | null> => {
  try {
    const requestPath = '/store/categories/mass-store'

    const categoriesQueues = arraySplit(categories, 100)

    const categoriesMassCreationQueuesResponses: Array<
      AxiosResponse<Array<Category>>
    > = []

    // const categoriesMassCreationQueuesResponses = await Promise.all(
    //
    // )

    // const categoriesMassCreationPromises = categoriesQueues
    // .map(
    //   categoriesQueue => {
    //     return axios.post<Array<Category>>(requestPath, {
    //       categories: categoriesQueue
    //     })
    //   }
    // )

    for (const categoriesQueue of categoriesQueues) {
      const categoriesMassCreationPromiseResult = await axios.post<
        Array<Category>
      >(requestPath, {
        categories: categoriesQueue
      })

      categoriesMassCreationQueuesResponses.push(
        categoriesMassCreationPromiseResult
      )
    }

    const categoriesMassCreationQueuesResponsesData =
      categoriesMassCreationQueuesResponses
        .filter(response => response.data instanceof Array)
        .map(response => response.data)

    const createdCategories = arrayMerge<Category>(
      ...categoriesMassCreationQueuesResponsesData
    )
    // const response = await axios.post(requestPath, {
    //   categories
    // })

    return createdCategories
  } catch (err) {
    // pass
  }

  return null
}

export const updateCategoryByFormData = async (
  categoryId: string,
  formData: FormData
): Promise<CategoryProps | null> => {
  try {
    const response = await axios.patch<CategoryProps>(
      `/store/categories/${categoryId}`,
      formData
    )

    const createdCategory = response.data

    if (response.status === 200 && createdCategory.id) {
      return createdCategory
    }
  } catch (err) {
    // pass
  }

  return null
}

export const deleteCategoryById = async (
  categoryId: string
): Promise<boolean> => {
  try {
    const response = await axios.delete(`/store/categories/${categoryId}`)

    if (response.data && response.data.success) {
      return true
    }
  } catch (err) {
    // pass
  }

  return false
}

export const deleteCategory = async (
  category: CategoryProps
): Promise<boolean> => {
  return await deleteCategoryById(category.id)
}

export const getCategories = async (): Promise<Array<CategoryProps>> => {
  try {
    const response = await axios.get<Array<CategoryProps>>('/store/categories')

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {
    // pass
  }

  return []
}

export const categoryFactoryByTitle = (
  categoryTitle: string,
  props?: Partial<Category>
): Category => ({
  description: categoryTitle,
  icon: null,
  id: generateRandomId(),
  slag: generateSlagByTitle(categoryTitle),
  title: categoryTitle,
  parentId: (props && props.parentId) || null
})
