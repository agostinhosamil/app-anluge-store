'use client'

import NextImage, { ImageProps } from 'next/image'
import { useState } from 'react'

import errorImage from './error.png'

type ImageComponent = React.FunctionComponent<ImageProps>

export const Image: ImageComponent = props => {
  const [error, setError] = useState<boolean>(false)

  const nextImageErrorHandler = () => {
    setError(true)
  }

  return (
    <NextImage
      {...props}
      src={!error ? props.src : errorImage}
      onError={nextImageErrorHandler}
    />
  )
}

export default Image
