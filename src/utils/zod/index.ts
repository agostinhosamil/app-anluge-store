import { z } from 'zod'

import { generateSlagByTitleWithoutSignature } from '@utils/generateSlagByTitle'
import { imageRef } from '@utils/images/isValidImageRef'

export const tagList = () =>
  z
    .array(
      z
        .string()
        .min(1)
        .transform(tag => tag.trim())
    )
    .nullish()
    .default([])
    .transform(tags => {
      const tagTitles = tags ?? []

      return tagTitles.map(title => {
        const slag = generateSlagByTitleWithoutSignature(title)

        return {
          slag,
          title
        }
      })
    })

export const mediaList = () =>
  z
    .array(imageRef())
    .nullish()
    .default([])
    .transform(medias => {
      const filesNames = medias ?? []

      return filesNames.map(fileName => ({ fileName }))
    })
