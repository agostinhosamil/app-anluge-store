import {
  AnlugeUploadClient,
  FileDataRefObject,
  UploadedImage
} from '@services/upload'
import {
  categoryBannerUploadClient,
  categoryIconUploadClient
} from '@utils/category/imageUploadClient'
import { CategoriesImagesData, CategoryImagesData } from 'Types/Category'

import { arraySplit, generateRandomId, noEmpty } from '.'
import { getCategoryDataFromImageFileName } from './category'
import { massUpdateCategoriesImages } from './models/category'

type CategoryImageFilesGroups = {
  icons: Array<FileDataRefObject>
  banners: Array<FileDataRefObject>
}

const splitCategoriesImagesFiles = (
  files: Array<FileDataRefObject>
): CategoryImageFilesGroups => {
  const categoriesImagesFileGroups: CategoryImageFilesGroups = {
    banners: [],
    icons: []
  }

  for (const fileDataObject of files) {
    const file = fileDataObject
    const categoryData = getCategoryDataFromImageFileName(file.ref.name)

    if (categoryData && categoryData.imageType === 'icon') {
      categoriesImagesFileGroups.icons.push(fileDataObject)
    }

    if (categoryData && categoryData.imageType === 'banner') {
      categoriesImagesFileGroups.banners.push(fileDataObject)
    }
  }

  return categoriesImagesFileGroups
}

export const getCategoriesImagesFromFileList = async (files: Array<File>) => {
  const categoriesImageSetKey =
    await categoryIconUploadClient.getImageSetKey('categories')

  const categoryImageRef = (imageKey: string | null | undefined) =>
    noEmpty(imageKey)
      ? `${categoriesImageSetKey}/${imageKey}`
      : 'category-banner-placeholder.jpg'

  const categoriesImagesRefObjects: Array<FileDataRefObject> = files.map(
    file => ({
      ref: file,
      key: generateRandomId()
    })
  )

  // const categoriesImagesData = categoriesImagesRefObjects.map(categoryImagesRefObject => {
  //   const fileName = `${categoriesImageSetKey}/${categoryImagesRefObject.key}`

  //   const categoryImageFileObject = categoryImagesRefObject instanceof File ? categoryImagesRefObject : categoryImagesRefObject.ref

  //   return {
  //     fileName,
  //     ...getCategoryDataFromImageFileName(categoryImageFileObject.name)
  //   }
  // })

  const categoriesImagesFileGroups = splitCategoriesImagesFiles(
    categoriesImagesRefObjects
  )

  await uploadCategoriesImagesRefObjects(
    categoriesImagesFileGroups.banners,
    categoryBannerUploadClient
  )

  await uploadCategoriesImagesRefObjects(
    categoriesImagesFileGroups.icons,
    categoryIconUploadClient
  )

  const categoriesImagesData: Array<CategoryImagesData | null> =
    categoriesImagesFileGroups.banners.map(categoryBannerImageRefObject => {
      const categoryData = getCategoryDataFromImageFileName(
        categoryBannerImageRefObject.ref.name
      )

      const categoryIconImageRefObject = categoriesImagesFileGroups.icons.find(
        categoryIconImageRefObject => {
          const currentCategoryData = getCategoryDataFromImageFileName(
            categoryIconImageRefObject.ref.name
          )

          return Boolean(
            categoryData && currentCategoryData?.slag === categoryData.slag
          )
        }
      )

      if (!(categoryData && categoryIconImageRefObject)) {
        return null
      }

      return {
        banner: categoryImageRef(categoryBannerImageRefObject.key),
        icon: categoryImageRef(categoryIconImageRefObject.key),
        slag: categoryData.slag
      }
    })

  const updatedCategories = await massUpdateCategoriesImages(
    categoriesImagesData.filter(imageData =>
      Boolean(imageData)
    ) as CategoriesImagesData
  )

  return updatedCategories
}

const uploadCategoriesImagesRefObjects = async (
  categoriesImagesRefObjects: Array<FileDataRefObject>,
  uploadClient: AnlugeUploadClient
) => {
  const filesQueues = arraySplit(categoriesImagesRefObjects, 20)

  const allUploadedImages: Array<UploadedImage> = []

  while (filesQueues.length > 0) {
    let i = 0

    for (; i < filesQueues.length; i++) {
      try {
        const uploadedImages = await uploadClient.uploadFiles(filesQueues[i])

        if (uploadedImages instanceof Array) {
          allUploadedImages.push(...uploadedImages)

          filesQueues.splice(i, 1)
        }
      } catch (err) {
        continue
      }
    }
  }
}
