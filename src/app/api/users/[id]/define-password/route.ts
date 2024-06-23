import { NextRequest, NextResponse } from 'next/server'

import { NextApiProps } from 'Types/next'

import { prisma } from '@services/prisma'
import { Hash } from '~/helpers/Hash'
import {
  DefineUserPasswordFormDataObject,
  DefineUserPasswordFormDataObjectSchema
} from '~/utils/models/validation/schemas/DefineUserPasswordFormDataObjectSchema'
import { getRequestBody } from '~/utils/server/getRequestBody'

type Params = {
  id: string
}

export const PATCH = async (
  request: NextRequest,
  props: NextApiProps<Params>
) => {
  const { params } = props

  const requestBody =
    await getRequestBody<DefineUserPasswordFormDataObject>(request)

  const validRequestBody =
    DefineUserPasswordFormDataObjectSchema.safeParse(requestBody)

  if (!validRequestBody.success) {
    console.log('Errors => ', validRequestBody.error.formErrors)

    return NextResponse.json({
      success: false,
      message: 'Invalid request input'
    })
  }

  const { user } = validRequestBody.data

  const password = await Hash.make(user.password)

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: params.id
      },

      data: {
        password
      }
    })

    if (updatedUser) {
      return NextResponse.json({
        success: true,
        message: 'user password changed successfully'
      })
    }
  } catch (err) {
    // error
    console.log('>>> Error: ', err)
  }

  return NextResponse.json(
    {
      success: false,
      message: 'Something went wrong'
    },
    {
      status: 500
    }
  )
}
