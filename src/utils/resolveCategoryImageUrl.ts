import { noEmpty, uploadedImageUrl } from '.'
import {
  BannerUploadedImageSize,
  IconUploadedImageSize
} from './category/imageUploadClient'

type IconImageType = 'icon' | `icon@${IconUploadedImageSize}`
type BannerImageType = 'banner' | `banner@${BannerUploadedImageSize}`
type ImageType = IconImageType | BannerImageType

export const resolveCategoryImageUrl = (
  category: any,
  imageType?: ImageType
): string => {
  const imageTypeRe = /^(icon|banner)(@(.+))?$/i

  if (noEmpty(category.icon)) {
    let imageVariantKey = ''
    let categoryImageProperty = 'icon'

    if (noEmpty(imageType)) {
      const imageTypeReMatch = imageTypeRe.exec(imageType) ?? [null, 'icon']
      const [, property, variant] = imageTypeReMatch

      if (noEmpty(variant)) {
        imageVariantKey = variant
      }

      categoryImageProperty = property
    }

    return uploadedImageUrl(
      String(category[categoryImageProperty]).concat(imageVariantKey)
    )
  }

  return uploadedImageUrl('category-icon-placeholder.jpg')
}
