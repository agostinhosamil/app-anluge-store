import { AnlugeUploadClient } from '@services/upload'

export const categoryBannerUploadClient = new AnlugeUploadClient({
  imageSet: 'categories',
  uploadedImageObjectFit: 'fill',
  uploadedImageSizes: {
    'x-small': '339x181',
    small: '510x272',
    normal: '500x500',
    medium: '880x470',
    large: '1500x800'
  }
})

export const categoryIconUploadClient = new AnlugeUploadClient({
  imageSet: 'categories',
  uploadedImageObjectFit: 'fill',
  uploadedImageSizes: {
    'x-small': '339x339',
    small: '410x410',
    normal: '500x500',
    medium: '880x880',
    large: '1200x1200'
  }
})
