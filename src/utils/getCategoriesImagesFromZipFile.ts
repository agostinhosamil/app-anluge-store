// import { getCategoriesImagesFromFileList } from './getCategoriesImagesFromFileList'
import { getZipFileContent } from './getZipFileContent'

export type CategoryImagesData = {
  category: {
    code: string
  }

  medias: Array<{
    fileName: string
  }>
}

export type CategoriesImagesData = Array<CategoryImagesData>

export type GetCategoriesImagesFromZipFileUtil = (
  zipFile: File
) => Promise<CategoriesImagesData>

export const getCategoriesImagesFromZipFile: GetCategoriesImagesFromZipFileUtil =
  async zipFile => {
    const imageFiles = await getZipFileContent(zipFile)

    // const categoriesImages = await getCategoriesImagesFromFileList(imageFiles)
    console.log(imageFiles)
    return []
  }
