import { FileDataRefObject } from '@services/upload'
import { convertBlobToFile, generateRandomId } from '~/utils'

const imageTypeMap = {
  jpg: 'image/jpeg',
  png: 'image/png'
}

export type ImageType = keyof typeof imageTypeMap

export type ImageFileArgument = File | Blob | FileDataRefObject

export type ImageOptions = Partial<{
  type: ImageType
  backgroundColor: string | [number, number, number]
  size:
    | `${number}`
    | number
    | `${number}x${number}`
    | {
        width: number | `${number}`
        height: number | `${number}`
      }
}>

type ArgumentsWithImageType = [ImageFileArgument, ImageType?]
type ArgumentsWithImageOptions = [ImageFileArgument, ImageOptions?]

const resolveFileObject = (file: ImageFileArgument): File => {
  if (file instanceof File) {
    return file
  }

  if (file instanceof Blob) {
    return convertBlobToFile(file, `${generateRandomId()}.jpg`)
  }

  return file.ref
}

export const convertImageFile = (
  ...args: ArgumentsWithImageOptions | ArgumentsWithImageType
): Promise<File | null> => {
  // file: ImageFileArgument,
  // type?: ImageType
  const [file, lastArgument] = args

  const options: ImageOptions =
    typeof lastArgument !== 'string'
      ? lastArgument ?? {}
      : {
          type: lastArgument
        }

  const imageType = imageTypeMap[options.type || 'jpg']

  const imageFileObject = resolveFileObject(file)

  const imageCanvas = document.createElement('canvas')
  const imageCanvasContext = imageCanvas.getContext(
    '2d'
  ) as CanvasRenderingContext2D

  return new Promise(resolve => {
    const imageElement = new Image()

    const imageSize = {
      width: 0,
      height: 0
    }

    const assignSizes = () => {
      imageSize.width = imageElement.naturalWidth
      imageSize.height = imageElement.naturalWidth

      Object.assign(imageCanvas, imageSize)
    }

    imageElement.addEventListener('loadedmetadata', () => {
      assignSizes()
    })

    imageElement.addEventListener('load', () => {
      assignSizes()

      const backgroundColorOption = options.backgroundColor ?? '#ffffff'
      const imageBackgroundColor =
        typeof backgroundColorOption === 'string'
          ? backgroundColorOption
          : `rgb(${backgroundColorOption.join(' ')})`

      imageCanvasContext.fillStyle = imageBackgroundColor
      imageCanvasContext.fillRect(0, 0, imageSize.width, imageSize.height)

      imageCanvasContext.drawImage(
        imageElement,
        0,
        0,
        imageSize.width,
        imageSize.height
      )

      imageCanvas.toBlob(imageCanvasBlobObject => {
        if (!imageCanvasBlobObject) {
          return resolve(null)
        }

        resolve(
          convertBlobToFile(imageCanvasBlobObject, `${generateRandomId()}.jpg`)
        )
      }, imageType)
    })

    imageElement.addEventListener('error', () => resolve(null))
    imageElement.addEventListener('abort', () => resolve(null))

    imageElement.src = URL.createObjectURL(imageFileObject)
  })
}
