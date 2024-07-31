'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage, { ImageProps } from 'next/image'
import { Fragment, useState } from 'react'

import { convertBlobToFile, noEmpty } from '~/utils'
import { filterValidImageFiles } from '~/utils/filterValidImageFiles'
import errorImage from './error.png'
import loadingImage from './loading.png'
import { LoadingContainer } from './styles'

type ImageComponent = React.FunctionComponent<ImageProps>

export const Image: ImageComponent = props => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [src, setSrc] = useState<string | StaticImport>()

  const imageFetcher = async (): Promise<void> => {
    if (noEmpty(props.src)) {
      try {
        const response = await fetch(props.src)
        const imageData = await response.blob()

        if (imageData) {
          const validImages = await filterValidImageFiles([
            convertBlobToFile(imageData, 'image.jpg')
          ])

          if (validImages.length >= 1) {
            setSrc(URL.createObjectURL(imageData))
            setError(false)

            return
          }

          setSrc(errorImage)

          return
        }
      } catch (err) {
        setSrc(errorImage)
      }
    }

    setError(true)
  }

  const nextImageErrorHandler = () => {
    setLoading(true)

    imageFetcher()
  }

  const NextImageWrapper = loading
    ? LoadingContainer
    : ({ children }: React.PropsWithChildren) => <Fragment>{children}</Fragment>

  return (
    <NextImageWrapper className={props.className}>
      {noEmpty(src) ? (
        <img {...props} src={src} />
      ) : (
        <NextImage
          {...props}
          src={!error ? (loading ? loadingImage : props.src) : errorImage}
          onError={nextImageErrorHandler}
        />
      )}
    </NextImageWrapper>
  )
}

export default Image
