import { noEmpty } from '.'
import {
  ProductImagesData,
  ProductsImagesData
} from './getProductsImagesFromZipFile'
import { productImageUploadClient } from './product/imageUploadClient'

const productCodeRegEx = /\s*-?\s*?(\(([a-zA-Z0-9_-]+)\)\s*\.(jpe?g|png|gif))$/

const getProductCodeFromImageName = (imageName: string): string => {
  const productCodeMatch = productCodeRegEx.exec(imageName)

  if (productCodeMatch) {
    return String(productCodeMatch[2])
  }

  return imageName
    .split('.')
    .filter(slice => noEmpty(slice))
    .slice(0, -1)
    .join('.')
    .trim()
}

export type GetProductsImagesFromFileListUtil = (
  imageFiles: Array<File>
) => Promise<ProductsImagesData>

export const getProductsImagesFromFileList: GetProductsImagesFromFileListUtil =
  async imageFiles => {
    const productsImagesData: Array<null | ProductImagesData> =
      await Promise.all(
        imageFiles.map((imageFile): Promise<null | ProductImagesData> => {
          const imageProductCode = getProductCodeFromImageName(imageFile.name)

          console.log(`>>> [${imageProductCode}] getting image product data`)

          return new Promise(resolve => {
            const tmpImage = new Image()

            console.log(`>>> [${imageProductCode}] start resolving promise`)

            const imageLoadHandler = async () => {
              console.log(`>>> [${imageProductCode}] Start image upload to cdn`)

              const uploadedImage =
                await productImageUploadClient.uploadFile(imageFile)

              console.log(
                `>>> [${imageProductCode}] uploaded image to cdn -> `,
                uploadedImage
              )

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
              tmpImage.onabort = () => resolve(null)

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
