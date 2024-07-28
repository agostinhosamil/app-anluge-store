import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { NextApiHandler } from 'Types/next'
import { getRequestBody } from '~/utils/server/getRequestBody'

const requestBodyObjectSchema = z.object({
  categories: z
    .array(
      z.object({
        slag: z.string().min(1),
        icon: z.string().min(10),
        banner: z.string().min(10)
      })
    )
    .min(1)
})

type RequestBodyObject = z.infer<typeof requestBodyObjectSchema>

export const POST: NextApiHandler = async request => {
  const requestBody = await getRequestBody<RequestBodyObject>(request)

  const requestBodyObjectSchemaValidation =
    requestBodyObjectSchema.safeParse(requestBody)

  if (!requestBodyObjectSchemaValidation.success) {
    return NextResponse.json({
      error: true,
      success: false,
      message: 'Invalid request input'
    })
  }

  const { categories } = requestBodyObjectSchemaValidation.data

  const categoriesWithSlag = await prisma.category.findMany({
    where: {
      slag: {
        in: categories.map(category => category.slag)
      }
    },

    select: {
      slag: true
    }
  })

  const categoriesSlags = categoriesWithSlag.map(({ slag }) => slag)

  const existingCategoryFilter = (category: any): boolean => {
    return categoriesSlags.includes(String(category.slag))
  }

  const updatedCategories = await prisma.$transaction(
    categories.filter(existingCategoryFilter).map(({ banner, icon, slag }) =>
      prisma.category.update({
        data: {
          banner,
          icon
        },

        where: {
          slag
        }
      })
    )
  )

  return NextResponse.json(updatedCategories)
}
