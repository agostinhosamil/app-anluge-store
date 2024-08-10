'use client'

import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import { Fragment, useState } from 'react'

import { convertBlobToFile, noEmpty } from '~/utils'
import { filterValidImageFiles } from '~/utils/filterValidImageFiles'

import errorImage from './error.png'
import loadingImage from './loading.png'
import { LoadingContainer } from './styles'

type ImageComponent = React.FunctionComponent<
  React.ImgHTMLAttributes<HTMLImageElement>
>

export const Image: ImageComponent = props => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [src, setSrc] = useState<string | StaticImageData>()

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

    setLoading(false)
  }

  const NextImageWrapper = loading
    ? LoadingContainer
    : ({ children }: React.PropsWithChildren) => <Fragment>{children}</Fragment>

  const resolveAlternateSrc = () =>
    !error ? (loading ? loadingImage.src : props.src) : errorImage.src

  return (
    <NextImageWrapper className={props.className}>
      <img
        {...props}
        src={noEmpty(src) ? src : resolveAlternateSrc()}
        onError={nextImageErrorHandler}
      />
      {/* {noEmpty(src) ? (
        <img {...props} src={src} />
      ) : (
        <NextImage
          {...props}
          src={!error ? (loading ? loadingImage : props.src) : errorImage}
          onError={nextImageErrorHandler}
        />
      )} */}
    </NextImageWrapper>
  )
}

export default Image
