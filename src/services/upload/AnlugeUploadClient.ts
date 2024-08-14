import axios from 'axios'

import { noEmpty } from '~/utils'
import { convertImageFileToJpeg } from '~/utils/images'
import {
  AnlugeUploadClientOptions,
  FileDataObject,
  UploadedImage
} from './types'
import { generateImageVariants, getImageVariantsData } from './utils'

type ImageSetProps = {
  id: number
  key: string
  name: string
}

type AddToFormDataPropsWithSingleFile = {
  file: FileDataObject
  multiple?: false
}

type AddToFormDataPropsWithMultipleFile = {
  files: Array<FileDataObject>
  multiple: true
}

type AddToFormDataProps = (
  | AddToFormDataPropsWithSingleFile
  | AddToFormDataPropsWithMultipleFile
) & {
  formData: FormData
  uploadFileOptions: AnlugeUploadClientOptions
}

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

  private addFileToFormData = async ({
    formData,
    uploadFileOptions,
    ...options
  }: AddToFormDataProps) => {
    let files: Array<FileDataObject> = []

    if ('file' in options) {
      files = [options.file]
    }

    if ('files' in options) {
      files = options.files
    }

    if (!files) {
      return
    }

    /**
     * @var number
     *
     * Upload file index
     */
    let uploadFileIndex = 0

    for (const fileDataObject of files) {
      const file = (await convertImageFileToJpeg(
        fileDataObject instanceof File ? fileDataObject : fileDataObject.ref
      )) as File

      const multiple = Boolean(
        typeof options.multiple === 'boolean' && options.multiple
      )

      const fileFormDataPrefix = !multiple
        ? 'file'
        : `files[${uploadFileIndex++}]`

      formData.append(`${fileFormDataPrefix}[name]`, file)
      formData.append(`${fileFormDataPrefix}[originalFileName]`, file.name)

      if (!(fileDataObject instanceof File) && noEmpty(fileDataObject.key)) {
        formData.append(`${fileFormDataPrefix}[fileKey]`, fileDataObject.key)
      }

      // formData.append(
      //   `${fileFormDataPrefix}[objectId]`,
      //   getProductCodeFromImageName(file.name)
      // )
      formData.append(`${fileFormDataPrefix}[alias]`, 'default')
      formData.append(
        `${fileFormDataPrefix}[set]`,
        uploadFileOptions.imageSet || 'default'
      )

      const imageVariantsData = getImageVariantsData(
        uploadFileOptions.uploadedImageSizes
      )

      const imageVariants = await generateImageVariants(
        file,
        imageVariantsData,
        uploadFileOptions.uploadedImageObjectFit
      )

      imageVariantsData.forEach((imageVariantData, imageVariantDataIndex) => {
        const imageVariant = imageVariants[imageVariantDataIndex]

        const imageVariantAlias = String(Object.keys(imageVariantData)[0])

        formData.append(
          `${fileFormDataPrefix}[variants][${imageVariantDataIndex}][name]`,
          imageVariant.object
        )
        formData.append(
          `${fileFormDataPrefix}[variants][${imageVariantDataIndex}][alias]`,
          imageVariantAlias
        )
        formData.append(
          `${fileFormDataPrefix}[variants][${imageVariantDataIndex}][set]`,
          uploadFileOptions.imageSet || 'default'
        )
      })
    }
  }

  uploadFile = async (
    file: FileDataObject,
    options?: AnlugeUploadClientOptions
  ): Promise<UploadedImage> => {
    const uploadFileOptions: AnlugeUploadClientOptions = {
      ...this.defaultOptions,
      ...(options || {})
    }

    // const files = files instanceof File ? [files] : Array.from(files)

    // TODO: generate image variants

    const formData = new FormData()

    await this.addFileToFormData({
      file,
      formData,
      uploadFileOptions
    })

    // console.log({ file, imageVariants })

    // imageVariants.forEach(imageVariant => {
    //   const img = new Image()

    //   img.src = imageVariant.url

    //   document.body.appendChild(img)
    // })

    const response = await axios.post<Array<UploadedImage>>(
      `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/files/store`,
      // `http://localhost/anluge-cdn/static/files/store`,
      formData,
      {
        // onUploadProgress(progressEvent) {
        //   // console.log('>>> uploading ', progressEvent)
        // }
      }
    )

    // console.log(`\n\n\n\n>>> [uploadFile] response.data: \n`, response.data)

    return response.data[0]
  }

  uploadFiles = async (
    files: Array<FileDataObject> | FileList,
    options?: AnlugeUploadClientOptions
  ): Promise<Array<UploadedImage>> => {
    files = Array.from(files)

    const uploadFileOptions: AnlugeUploadClientOptions = {
      ...this.defaultOptions,
      ...(options || {})
    }

    const formData = new FormData()

    await this.addFileToFormData({
      files,
      formData,
      multiple: true,
      uploadFileOptions
    })

    const response = await axios.post<Array<UploadedImage>>(
      `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/files/store`,
      formData
    )

    return response.data
  }

  getImageSet = async (imageSetName: string): Promise<ImageSetProps | null> => {
    try {
      const response = await axios.get<ImageSetProps>(
        `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/images/${imageSetName}`
      )

      if ('key' in response.data) {
        return response.data
      }
    } catch (err) {
      return null
    }

    return null
  }

  getImageSetOrCreate = async (
    imageSetName: string
  ): Promise<ImageSetProps> => {
    const response = await axios.post<ImageSetProps>(
      `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/images/${imageSetName}`
    )

    return response.data
  }

  getImageSetKey = async (
    imageSetName: string
  ): Promise<string | undefined> => {
    const imageSet = await this.getImageSetOrCreate(imageSetName)

    return 'key' in imageSet ? imageSet.key : undefined
  }
}
