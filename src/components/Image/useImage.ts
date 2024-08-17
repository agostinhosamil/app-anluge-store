import { useEffect, useState } from 'react'

import errorImage from './error.png'
import { imageStore } from './imageStore'

export type ImageSrc = string | undefined

type UseImageHookLoadedResponse = {
  error: false
  loading: false
  src: string
}

type UseImageHookLoadingResponse = {
  error: false
  loading: true
  src: undefined
}

type UseImageHookFailureResponse = {
  error: true
  loading: false
  src: string
}

type UseImageHookResponse =
  | UseImageHookLoadedResponse
  | UseImageHookLoadingResponse
  | UseImageHookFailureResponse

export const useImage = (imageSrc: ImageSrc): UseImageHookResponse => {
  const [src, setSrc] = useState<ImageSrc>(imageStore.getItem(imageSrc ?? ''))
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const loadedImage = () => /^(blob:)/i.test(String(src))

  useEffect(() => {
    const effectHandler = async () => {
      const imageLocalUrl = await imageStore.setItem(imageSrc ?? '')

      setLoading(false)
      setError(!imageLocalUrl)
      setSrc(imageLocalUrl ?? errorImage.src)
    }

    if (!loadedImage()) {
      setLoading(true)
      effectHandler()
    }
  })

  return {
    loading,
    error,
    src
  } as UseImageHookResponse
}
