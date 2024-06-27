import { ImageSizes, ImageVariant } from '@services/upload/types'
import { generateRandomId } from '~/utils'

export const generateImageVariant = (
  imageFile: File,
  sizes: ImageSizes
): Promise<ImageVariant> => {
  const canvasElement = document.createElement('canvas')
  const canvasContext = canvasElement.getContext('2d')

  const imageFileUrl = URL.createObjectURL(imageFile)
  const imageElement = new Image(sizes.width, sizes.height)

  imageElement.src = imageFileUrl

  if (!canvasContext) {
    throw new Error('Could not generate image variant')
  }

  return new Promise((resolve, reject) => {
    imageElement.onload = () => {
      Object.assign(canvasElement, sizes)

      canvasContext.fillStyle = '#ffffff'
      canvasContext.fillRect(0, 0, sizes.width, sizes.height)

      canvasContext.drawImage(
        imageElement,
        sizes.width * 0.2,
        sizes.height * 0.2,
        sizes.width * 0.6,
        sizes.height * 0.6
      )

      canvasElement.toBlob(canvasBlob => {
        if (!canvasBlob) {
          return reject('Could not generate image variant')
        }

        const imageVariantFileObject = new File(
          [canvasBlob],
          `${generateRandomId()}.jpg`,
          {
            lastModified: Date.now(),
            type: 'image/jpeg'
          }
        )

        resolve({
          object: imageVariantFileObject,
          url: URL.createObjectURL(canvasBlob)
        })
      }, 'image/jpeg')
    }

    imageElement.onerror = () => {
      reject('invalid image file')
    }
  })
}
