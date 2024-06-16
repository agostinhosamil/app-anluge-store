import { getProductsImagesFromFileList } from './getProductsImagesFromFileList'
import { getZipFileContent } from './getZipFileContent'

export type ProductImagesData = {
  product: {
    code: string
  }

  medias: Array<{
    fileName: string
  }>
}

export type ProductsImagesData = Array<ProductImagesData>

export type GetProductsImagesFromZipFileUtil = (
  zipFile: File
) => Promise<ProductsImagesData>

export const getProductsImagesFromZipFile: GetProductsImagesFromZipFileUtil =
  async zipFile => {
    const imageFiles = await getZipFileContent(zipFile)

    const productsImages = await getProductsImagesFromFileList(imageFiles)

    return productsImages
  }
