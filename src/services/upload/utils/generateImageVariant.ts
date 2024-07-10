import {
  ImageSizes,
  ImageVariant,
  UploadedImageObjectFit
} from '@services/upload/types'
import { generateRandomId } from '~/utils'

type UploadedImageCoords = {
  width: number
  height: number
  x: number
  y: number
}

type ImageCoordsResolverProps = {
  destinationSize: ImageSizes
  sourceSize: ImageSizes
}

export const generateImageVariant = (
  imageFile: File,
  sizes: ImageSizes,
  imageObjectFit: UploadedImageObjectFit | undefined = 'contain'
): Promise<ImageVariant> => {
  const canvasElement = document.createElement('canvas')
  const canvasContext = canvasElement.getContext('2d')

  const imageFileUrl = URL.createObjectURL(imageFile)
  const imageElement = new Image(sizes.width, sizes.height)

  imageElement.src = imageFileUrl

  if (!canvasContext) {
    throw new Error('Could not generate image variant')
  }

  const resolveImageCoords = (
    props: ImageCoordsResolverProps,
    imageObjectFit: UploadedImageObjectFit
  ): UploadedImageCoords => {
    const { destinationSize, sourceSize } = props

    const resolveCover = (): UploadedImageCoords => {
      const imageWidth = destinationSize.width
      const imageOriginalHeightRelativeToOriginalWidth =
        sourceSize.height / sourceSize.width
      const imageHeight =
        imageWidth * imageOriginalHeightRelativeToOriginalWidth

      return {
        height: imageHeight,
        width: imageWidth,
        x: 0,
        y: destinationSize.width / 2 - imageHeight / 2
      }
    }

    const resolveDefault = (): UploadedImageCoords => {
      const imageWidth = destinationSize.width * 0.6
      const imageHeight = imageWidth / (sourceSize.width / sourceSize.height)

      return {
        width: imageWidth,
        height: imageHeight,
        x: destinationSize.width / 2 - imageWidth / 2,
        y: destinationSize.height / 2 - imageHeight / 2
      }
    }

    switch (imageObjectFit) {
      case 'cover':
        return resolveCover()

      case 'fill':
        return {
          ...destinationSize,
          x: 0,
          y: 0
        }

      default:
        return resolveDefault()
    }
  }

  return new Promise((resolve, reject) => {
    imageElement.onload = () => {
      Object.assign(canvasElement, sizes)

      canvasContext.fillStyle = '#ffffff'
      canvasContext.fillRect(0, 0, sizes.width, sizes.height)

      const imageOriginalWidth = imageElement.naturalWidth
      const imageOriginalHeight = imageElement.naturalHeight

      const imageCoords = resolveImageCoords(
        {
          destinationSize: sizes,
          sourceSize: {
            height: imageOriginalHeight,
            width: imageOriginalWidth
          }
        },
        imageObjectFit || 'contain'
      )

      canvasContext.drawImage(
        imageElement,
        imageCoords.x,
        imageCoords.y,
        imageCoords.width,
        imageCoords.height
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
