import { Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import {
  defaultRolePrismaQueryData,
  masterAdminRolePrismaQueryData
} from '~/config/cache/models/role'
import { Hash } from '~/helpers/Hash'
import { getSearchParamsQueryArgument, isMasterKey } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'

type PostRequestBodyProps = {
  user: {
    name: string
    email: string
    phone: string
    password: string
    passwordConfirmation: string
  }
}

export async function GET(request: NextRequest) {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)

  const users = await prisma.user.findMany({
    ...productsQueryArguments,
    include: {
      role: {
        include: {
          permissions: true
        }
      }
    }
  })

  return Response.json(users)
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const { email, name, password: inputPassword, phone } = requestBody.user

  const password = await Hash.make(inputPassword)

  const role = isMasterKey(email)
    ? masterAdminRolePrismaQueryData
    : defaultRolePrismaQueryData

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        phone,
        password,
        role
      },
      include: {
        role: {
          include: {
            permissions: true
          }
        }
      }
    })

    return Response.json(user)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(err)
    }
  }

  return Response.json(
    { message: 'Error while request' },
    {
      status: 400
    }
  )
}
