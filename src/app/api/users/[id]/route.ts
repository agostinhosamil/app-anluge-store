import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { NextApiProps } from 'Types/next'
import { Hash } from '~/helpers/Hash'
import { getObjectProps, noEmpty } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'

type Params = {
  id: string
}

type PostRequestBodyProps = {
  user: {
    name: string
    email: string
    phone: string
    password: string
    passwordConfirmation: string
  }
}

export const GET = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    },

    include: {
      favorites: {
        include: {
          product: true
        }
      },
      role: {
        include: {
          permissions: true
        }
      }
    }
  })

  if (user) {
    return NextResponse.json(user)
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not found',
      message: 'user not found'
    },
    {
      status: 404
    }
  )
}

export const PATCH = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const userData = getObjectProps(requestBody.user, [
    'name',
    'email',
    'phone',
    'password'
  ])

  if (noEmpty(userData.password)) {
    userData.password = await Hash.make(userData.password)
  }

  const user = await prisma.user.update({
    where: {
      id: params.id
    },

    data: userData
  })

  if (user) {
    return NextResponse.json(user)
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not found',
      message: 'user not found'
    },
    {
      status: 404
    }
  )
}

export const DELETE = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: params.id
    }
  })

  if (deletedUser) {
    return NextResponse.json({
      success: true,
      message: 'User successfully deleted'
    })
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not found',
      message: 'user not found'
    },
    {
      status: 404
    }
  )
}
