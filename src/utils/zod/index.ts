import { z } from 'zod'

import { prisma } from '@services/prisma'
import { AnlugeUploadClient, AnlugeUploadClientOptions } from '@services/upload'
import { generateSlagByTitleWithoutSignature } from '@utils/generateSlagByTitle'
import { convertImageFileToJpeg, isValidImageFile } from '@utils/images'
import { imageRef } from '@utils/images/isValidImageRef'
import { convertBlobToFile, generateRandomId } from '..'

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

export const imageFileRef = (uploadClientOptions?: AnlugeUploadClientOptions) =>
  z
    .string()
    // .refine(imageFileRef => {
    //   const re = /^(blob:(.+))/i

    //   return re.test(imageFileRef)
    // })
    .transform(async imageFileRef => {
      try {
        const response = await fetch(imageFileRef)
        const data = await response.blob()

        if (data instanceof Blob) {
          const imageFileObject = convertBlobToFile(
            data,
            `${generateRandomId()}.jpg`
          )

          return imageFileObject
        }
      } catch (err) {
        return null
      }
    })
    .refine(imageFile => imageFile instanceof File)
    .refine(async imageFile => {
      const validImageFile = await isValidImageFile(imageFile)

      return Boolean(validImageFile)
    }, 'Image file must be a valid image')
    .transform(
      async imageFile => (await convertImageFileToJpeg(imageFile)) as File
    )
    // .refine(imageFile => imageFile instanceof File)
    .transform(async imageFile => {
      try {
        const uploadClient = new AnlugeUploadClient(uploadClientOptions)

        const uploadedFile = await uploadClient.uploadFile(imageFile)

        return uploadedFile
      } catch (err) {
        return null
      }
    })
    .refine(
      uploadedImage => uploadedImage !== null,
      'Could not upload image file'
    )
