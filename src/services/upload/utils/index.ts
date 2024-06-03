import { ImageSizes, ImageVariantData, UploadedImageSizes } from '../types'

export * from './generateImageVariant'
export * from './generateImageVariants'

export const readImageSize = (imageSize: string): ImageSizes => {
  const imageSizeSlices = imageSize.split(/\s*x\s*/i)

  if (imageSizeSlices.length < 2) {
    const sizeValue = parseInt(imageSizeSlices[0])

    return {
      height: sizeValue,
      width: sizeValue
    }
  }

  const [width, height] = imageSizeSlices.map(slice => parseInt(slice))

  return {
    width,
    height
  }
}

export const getImageVariantsData = (
  imageSizes?: UploadedImageSizes
): Array<ImageVariantData> => {
  const imageVariantsData: Array<ImageVariantData> = []

  if (imageSizes instanceof Array) {
    imageSizes.forEach(imageSize =>
      imageVariantsData.push({
        [imageSize]: readImageSize(imageSize)
      })
    )
  } else {
    for (const key in imageSizes) {
      imageVariantsData.push({
        [key]: readImageSize(imageSizes[key])
      })
    }
  }

  return imageVariantsData
}
