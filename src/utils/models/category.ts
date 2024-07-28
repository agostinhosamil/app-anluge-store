import { axios } from '@services/axios'
import { AxiosResponse } from 'axios'
import { Category } from '~/components/dashboard/Forms/CategoryMassCreationForm/types'
import { CategoriesImagesData, CategoryProps } from '~/Types/Category'
import { arrayMerge, arraySplit, generateRandomId, noEmpty } from '~/utils'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'

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

export const massUpdateCategoriesImages = async (
  categories: CategoriesImagesData
): Promise<Array<Category> | null> => {
  try {
    const productMassUpdateConcurrency = 5
    const productMassStoreRequestPath = '/store/categories/image-mass-update'
    const categoriesQueues = arraySplit(
      categories,
      productMassUpdateConcurrency
    )

    const categoriesMassUpdateQueuesResponses: Array<
      AxiosResponse<Array<Category>>
    > = []

    for (const categoriesQueue of categoriesQueues) {
      const categoriesMassUpdatePromiseResult = await axios.post<
        Array<Category>
      >(productMassStoreRequestPath, {
        categories: categoriesQueue
      })

      categoriesMassUpdateQueuesResponses.push(
        categoriesMassUpdatePromiseResult
      )
    }

    const categoriesMassUpdateQueuesResponsesData =
      categoriesMassUpdateQueuesResponses
        .filter(response => response.data instanceof Array)
        .map(response => response.data)

    const updatedCategories = arrayMerge<Category>(
      ...categoriesMassUpdateQueuesResponsesData
    )
    // const response = await axios.post(productMassStoreRequestPath, {
    //   categories
    // })

    return updatedCategories
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

    const categoriesQueues = arraySplit(categories, 10)

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
  slag: generateSlagByTitleWithoutSignature(categoryTitle),
  title: categoryTitle,
  parentId: (props && props.parentId) || null,
  banner: null
})

export const getCategoriesTree = async (): Promise<Array<CategoryProps>> => {
  const categories = await getCategories()

  return categoryListToTree(categories)
}

export const categoryListToTree = (
  categories: Array<CategoryProps>
): Array<CategoryProps> => {
  const categoriesTree: Array<CategoryProps> = []
  const loadedCategories: Array<CategoryProps> = []

  // const getCategoryIndex = (categoryId: string): number => {
  //   let i = 0

  //   for (; i < categories.length; i++) {
  //     const category = categories[i]

  //     if (category.id === categoryId) {
  //       return i
  //     }
  //   }

  //   return -1
  // }

  const getCategoryChildren = (categoryId: string): Array<CategoryProps> => {
    return categories
      .filter(category => category.parentId === categoryId)
      .map(category => {
        // const categoryIndex = getCategoryIndex(category.id)

        // categories.splice(categoryIndex, 1)
        loadedCategories.push(category)

        return {
          ...category,
          categories: getCategoryChildren(category.id)
        }
      })
  }

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]

    if (
      loadedCategories.some(({ id }) => id === category.id) ||
      noEmpty(category.parentId)
    ) {
      continue
    }

    // console.log(
    //   'getCategoryChildren(category.id) => ',
    //   getCategoryChildren(category.id)
    // )

    categoriesTree.push({
      ...category,
      categories: getCategoryChildren(category.id)
    })
  }

  // categories.forEach((category, categoryIndex) => {

  // })

  // return categories
  //   .filter(category => !loadedCategories.some(({ id }) => id === category.id))
  //   .map(category => ({
  //     ...category,
  //     categories: [
  //       ...(category.categories instanceof Array ? category.categories : []),
  //       ...getCategoryChildren(category.id)
  //     ]
  //   }))

  return categoriesTree
}

export const getCategoryFromList = (
  categoryId: string,
  categoryList: Array<CategoryProps | any>
): CategoryProps | null => {
  for (const category of categoryList) {
    if (category.id !== categoryId) {
      const categorySubcategories = category.categories
      const innerCategory = getCategoryFromList(
        categoryId,
        categorySubcategories
      )

      if (innerCategory) {
        return innerCategory
      }

      continue
    }

    return category
  }

  return null
}
