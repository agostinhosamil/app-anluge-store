export type UploadedImageSizes =
  | Array<string>
  | {
      [key: string]: string
    }

export type UploadedImageObjectFit = 'contain' | 'cover' | 'fill' | 'scale-down'

export type UploadedImageSet = string

export type AnlugeUploadClientOptions = {
  uploadedImageSizes?: UploadedImageSizes
  imageSet?: UploadedImageSet
  uploadedImageObjectFit?: UploadedImageObjectFit
}

export type UploadedImage = {
  id: string
  alias: string
  name: string
  path: string
  url: string
  variants: Array<Omit<UploadedImage, 'variants'>>
}

export type ImageSizes = {
  width: number
  height: number
}

export type ImageVariantData = {
  [key: string]: ImageSizes
}

export type ImageVariant = {
  object: File
  url: string
}

export type FileDataRefObject = {
  ref: File
  key: string | null | undefined
}

export type FileDataObject = File | FileDataRefObject
