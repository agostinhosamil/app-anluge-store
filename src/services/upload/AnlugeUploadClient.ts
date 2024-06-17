import axios from 'axios'
import { AnlugeUploadClientOptions, UploadedImage } from './types'
import { generateImageVariants, getImageVariantsData } from './utils'

export class AnlugeUploadClient {
  /**
   * @var {AnlugeUploadClientOptions}
   *
   * default options for the upload client
   */
  private readonly defaultOptions: AnlugeUploadClientOptions = {
    imageSet: 'default'
  }

  constructor(options?: AnlugeUploadClientOptions) {
    if (options) {
      Object.assign(this.defaultOptions, options)
    }
  }

  uploadFile = async (
    file: File,
    options?: AnlugeUploadClientOptions
  ): Promise<UploadedImage> => {
    const uploadFileOptions: AnlugeUploadClientOptions = {
      ...this.defaultOptions,
      ...(options || {})
    }

    // TODO: generate image variants

    const formData = new FormData()

    formData.append('file[name]', file)
    formData.append('file[alias]', 'default')
    formData.append('file[set]', uploadFileOptions.imageSet || 'default')

    const imageVariantsData = getImageVariantsData(
      uploadFileOptions.uploadedImageSizes
    )

    const imageVariants = await generateImageVariants(file, imageVariantsData)

    imageVariantsData.forEach((imageVariantData, imageVariantDataIndex) => {
      const imageVariant = imageVariants[imageVariantDataIndex]

      const imageVariantAlias = String(Object.keys(imageVariantData)[0])

      formData.append(`variants[]`, imageVariant.object)
      formData.append(
        `file[variants][${imageVariantDataIndex}][alias]`,
        imageVariantAlias
      )
      formData.append(
        `file[variants][${imageVariantDataIndex}][set]`,
        uploadFileOptions.imageSet || 'default'
      )
    })

    // console.log({ file, imageVariants })

    // imageVariants.forEach(imageVariant => {
    //   const img = new Image()

    //   img.src = imageVariant.url

    //   document.body.appendChild(img)
    // })

    console.log('>>> [lstep] Send file to CDN')

    const response = await axios.post<UploadedImage>(
      `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/files/store`,
      // `http://localhost/anluge-cdn/static/files/store`,
      formData
    )

    return response.data
  }

  uploadFiles = async (
    files: Array<File>,
    options?: AnlugeUploadClientOptions
  ): Promise<Array<UploadedImage>> => {
    const fileUploadRequest = (file: File) => {
      return this.uploadFile(file, options)
    }

    const uploadedFiles = await Promise.all(files.map(fileUploadRequest))

    return uploadedFiles
  }
}
