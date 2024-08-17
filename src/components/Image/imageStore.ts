import { convertBlobToFile, noEmpty } from '~/utils'
import { filterValidImageFiles } from '~/utils/filterValidImageFiles'

type ImageStore = {
  [key: string]: string
}

const store: ImageStore = {}

export const imageStore = {
  getItem(imageUrl: string): string {
    if (typeof store[imageUrl] === 'string') {
      return store[imageUrl]
    }

    return imageUrl
  },

  async setItem(imageUrl: string) {
    if (!(typeof store[imageUrl] === typeof undefined && noEmpty(imageUrl))) {
      return
    }

    try {
      const response = await fetch(imageUrl)
      const imageData = await response.blob()

      if (imageData instanceof Blob) {
        const validImages = await filterValidImageFiles([
          convertBlobToFile(imageData, 'image.jpg')
        ])

        if (validImages.length >= 1) {
          const [imageFile] = validImages

          store[imageUrl] = URL.createObjectURL(imageFile)

          return store[imageUrl]
        }
      }
    } catch (err) {
      return
    }
  }
}
