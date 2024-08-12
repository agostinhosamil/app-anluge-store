import { z } from 'zod'

export const isValidImageRef = async (imageRef: string) => {
  const re = /^([0-9]+\/[0-9]+)$/

  if (!re.test(imageRef)) {
    return false
  }

  return true
}

export const imageRef = () =>
  z.string().refine(async imageRef => {
    return await isValidImageRef(imageRef)
  })
