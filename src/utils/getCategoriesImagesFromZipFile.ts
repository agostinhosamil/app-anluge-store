// import { getCategoriesImagesFromFileList } from './getCategoriesImagesFromFileList'
import { getZipFileContent } from './getZipFileContent'

export type CategoryImagesData = File

export type CategoriesImagesData = Array<CategoryImagesData>

export type GetCategoriesImagesFromZipFileUtil = (
  zipFile: File
) => Promise<CategoriesImagesData>

export const getCategoriesImagesFromZipFile: GetCategoriesImagesFromZipFileUtil =
  async zipFile => {
    const imageFiles = await getZipFileContent(zipFile)

    return imageFiles
  }
