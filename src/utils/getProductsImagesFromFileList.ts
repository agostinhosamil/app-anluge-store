import { arraySplit, noEmpty } from '.'
import {
  ProductImagesData,
  ProductsImagesData
} from './getProductsImagesFromZipFile'
import { productImageUploadClient } from './product/imageUploadClient'

// /^([a-zA-Z0-9%_s\(\)-.]+)$/
const productCodeRegEx =
  /\s*-?\s*?(\(([a-zA-Z0-9%_().-]+)\)\s*(\.(jpe?g|png|gif))?)$/i

const getProductCodeFromImageName = (imageName: string): string => {
  const productCodeMatch = productCodeRegEx.exec(imageName)

  if (productCodeMatch) {
    return decodeURIComponent(String(productCodeMatch[2]))
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

const filterValidImageFiles = async (
  imageFiles: Array<File>
): Promise<Array<File>> => {
  const productsImagesData: Array<null | File> = await Promise.all(
    imageFiles.map((imageFile): Promise<null | File> => {
      return new Promise(resolve => {
        const tmpImage = new Image()

        const imageLoadHandler = async () => {
          resolve(imageFile)
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

  const validImageFiles: Array<File> = []

  for (const imageFile of productsImagesData) {
    if (imageFile) {
      validImageFiles.push(imageFile)
    }
  }

  return validImageFiles
}

export const getProductsImagesFromFileList: GetProductsImagesFromFileListUtil =
  async imageFiles => {
    const validImageFiles = await filterValidImageFiles(imageFiles)

    const productsImagesData: Array<ProductImagesData> = []

    const imageFilesUploadConcurrency = 20
    const imageFilesUploadQueues = arraySplit(
      validImageFiles,
      imageFilesUploadConcurrency
    )

    for (const imageFileUploadQueue of imageFilesUploadQueues) {
      try {
        const uploadedImages =
          await productImageUploadClient.uploadFiles(imageFileUploadQueue)

        for (let i = 0; i < uploadedImages.length; i++) {
          const uploadedImage = uploadedImages[i]
          const imageFile = imageFileUploadQueue[i]
          const imageProductCode = getProductCodeFromImageName(imageFile.name)

          productsImagesData.push({
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
      } catch (err) {
        continue
      }
    }

    // const productsImagesData2: Array<null | ProductImagesData> =
    //   await Promise.all(
    //     imageFiles.map((imageFile): Promise<null | ProductImagesData> => {
    //       const imageProductCode = getProductCodeFromImageName(imageFile.name)

    //       return new Promise(resolve => {
    //         const tmpImage = new Image()

    //         const imageLoadHandler = async () => {
    //           const uploadedImage =
    //             await productImageUploadClient.uploadFile(imageFile)

    //           resolve({
    //             medias: [
    //               {
    //                 fileName: uploadedImage.name
    //               }
    //             ],
    //             product: {
    //               code: imageProductCode
    //             }
    //           })
    //         }

    //         try {
    //           tmpImage.onload = () => {
    //             imageLoadHandler()
    //           }

    //           tmpImage.onerror = () => resolve(null)
    //           tmpImage.onabort = () => resolve(null)

    //           tmpImage.src = URL.createObjectURL(imageFile)
    //         } catch (err) {
    //           resolve(null)
    //         }
    //       })
    //     })
    //   )

    // const filteredProductImagesData = productsImagesData.filter(
    //   productImagesData => Boolean(productImagesData)
    // ) as ProductsImagesData

    return productsImagesData
  }
