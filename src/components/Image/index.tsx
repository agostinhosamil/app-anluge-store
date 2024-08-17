'use client'

import { Fragment, useEffect } from 'react'

import loadingImage from './loading.png'
import { LoadingContainer } from './styles'
import { useImage } from './useImage'

type ImageComponentProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
}

type ImageComponent = React.FunctionComponent<ImageComponentProps>

export const Image: ImageComponent = ({ fill, ...props }) => {
  const image = useImage(props.src)

  useEffect(() => {}, [fill])

  const NextImageWrapper = image.loading
    ? LoadingContainer
    : ({ children }: React.PropsWithChildren) => <Fragment>{children}</Fragment>

  return (
    <NextImageWrapper className={props.className}>
      <img {...props} src={image.loading ? loadingImage.src : image.src} />
    </NextImageWrapper>
  )
}

export default Image
