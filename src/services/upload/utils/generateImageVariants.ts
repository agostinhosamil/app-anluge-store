import { ImageVariant, ImageVariantData } from '@services/upload/types'
import { generateImageVariant } from './generateImageVariant'

export const generateImageVariants = async (
  imageFile: File,
  imageVariantsData: Array<ImageVariantData>
): Promise<Array<ImageVariant>> => {
  const imageVariants = await Promise.all(
    imageVariantsData.map(imageVariantData => {
      return generateImageVariant(imageFile, Object.values(imageVariantData)[0])
    })
  )

  return imageVariants
}
