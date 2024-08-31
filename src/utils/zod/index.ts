import { z } from 'zod'

import { prisma } from '@services/prisma'
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

export const categoryRef = () =>
  z
    .string()
    .transform(async categoryRef => {
      const storedCategory = await prisma.category.findFirst({
        where: {
          OR: [
            {
              id: categoryRef
            },
            {
              slag: categoryRef.toLowerCase()
            }
          ]
        },

        select: {
          id: true
        }
      })

      return storedCategory?.id
    })
    .refine(productId => Boolean(productId))
    .transform(productId => String(productId))

export const productRef = () =>
  z
    .string()
    .transform(async productRef => {
      const storedProduct = await prisma.product.findFirst({
        where: {
          OR: [
            {
              id: productRef
            },
            {
              slag: productRef.toLowerCase()
            }
          ]
        },

        select: {
          id: true
        }
      })

      return storedProduct?.id
    })
    .refine(productId => Boolean(productId))
    .transform(productId => String(productId))
