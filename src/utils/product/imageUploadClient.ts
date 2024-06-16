import { AnlugeUploadClient } from '@services/upload'

export const productImageUploadClient = new AnlugeUploadClient({
  imageSet: 'products',
  uploadedImageSizes: {
    large: '1200x1600',
    medium: '800x1200',
    normal: '540x800',
    small: '360x540'
  }
})
