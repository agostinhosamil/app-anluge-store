'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage, { ImageProps } from 'next/image'
import { Fragment, useState } from 'react'

import { noEmpty } from '~/utils'
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
        console.log(`\n\n\n\n>>> Fetch Image: (${props.src})\n\n\n\n`)
        const response = await fetch(props.src)
        const imageData = await response.blob()

        if (imageData) {
          setSrc(URL.createObjectURL(imageData))
          setError(false)

          return
        }
      } catch (err) {
        // pass...
      }
    }

    setError(true)
  }

  const nextImageErrorHandler = () => {
    setLoading(true)

    imageFetcher()
  }

  const NextImageWrapper = loading ? LoadingContainer : Fragment

  return (
    <NextImageWrapper>
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
