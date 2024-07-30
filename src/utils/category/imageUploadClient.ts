import { AnlugeUploadClient } from '@services/upload'

export const bannerUploadedImageSizes = {
  'x-small': '339x181',
  small: '510x272',
  normal: '500x500',
  medium: '880x470',
  large: '1500x800'
}

export const iconUploadedImageSizes = {
  'x-small': '339x339',
  small: '410x410',
  normal: '500x500',
  medium: '880x880',
  large: '1200x1200'
}

export type IconUploadedImageSizes = typeof iconUploadedImageSizes
export type IconUploadedImageSize = keyof IconUploadedImageSizes
export type BannerUploadedImageSizes = typeof bannerUploadedImageSizes
export type BannerUploadedImageSize = keyof BannerUploadedImageSizes

export const categoryBannerUploadClient = new AnlugeUploadClient({
  imageSet: 'categories',
  uploadedImageObjectFit: 'fill',
  uploadedImageSizes: bannerUploadedImageSizes
})

export const categoryIconUploadClient = new AnlugeUploadClient({
  imageSet: 'categories',
  uploadedImageObjectFit: 'fill',
  uploadedImageSizes: iconUploadedImageSizes
})
