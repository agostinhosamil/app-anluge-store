import { productImageUploadClient } from '@utils/product/imageUploadClient'

import { getZipFileContent } from './getZipFileContent'

const productCodeRegEx = /\s*-?\s*?(\(([a-zA-Z0-9_-]+)\)\s*\.(jpe?g|png|gif))$/

const getProductCodeFromImageName = (imageName: string): string => {
  const productCodeMatch = productCodeRegEx.exec(imageName)

  if (productCodeMatch) {
    return String(productCodeMatch[2])
  }

  return imageName
}

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

    const productsImagesData: Array<null | ProductImagesData> =
      await Promise.all(
        imageFiles.map((imageFile): Promise<null | ProductImagesData> => {
          const imageProductCode = getProductCodeFromImageName(imageFile.name)

          return new Promise(resolve => {
            const tmpImage = new Image()

            const imageLoadHandler = async () => {
              const uploadedImage =
                await productImageUploadClient.uploadFile(imageFile)

              resolve({
                medias: [
                  {
                    fileName: uploadedImage.name
                  }
                ],
                product: {
                  code: imageProductCode
                }
              })
            }

            try {
              tmpImage.onload = () => {
                imageLoadHandler()
              }

              tmpImage.onerror = () => resolve(null)

              tmpImage.src = URL.createObjectURL(imageFile)
            } catch (err) {
              resolve(null)
            }
          })
        })
      )

    const filteredProductImagesData = productsImagesData.filter(
      productImagesData => Boolean(productImagesData)
    )

    return filteredProductImagesData as ProductsImagesData
  }
