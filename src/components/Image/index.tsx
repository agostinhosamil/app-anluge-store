'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage, { ImageProps } from 'next/image'
import { useState } from 'react'

import { noEmpty } from '~/utils'
import errorImage from './error.png'

type ImageComponent = React.FunctionComponent<ImageProps>

export const Image: ImageComponent = props => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [src, setSrc] = useState<string | StaticImport>(props.src)

  const imageFetcher = async (): Promise<void> => {
    if (noEmpty(props.src)) {
      try {
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

  return loading ? null : (
    <NextImage
      {...props}
      src={!error ? src : errorImage}
      onError={nextImageErrorHandler}
    />
  )
}

export default Image
