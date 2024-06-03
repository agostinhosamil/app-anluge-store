import { Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import { Hash } from '~/helpers/Hash'
import { formDataToJson } from '~/utils/formDataToJson'

type PostRequestBodyProps = {
  user: {
    name: string
    email: string
    phone: string
    role: string
    password: string
    passwordConfirmation: string
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const { email, name, password: inputPassword, phone, role } = requestBody.user

  const password = await Hash.make(inputPassword)

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        phone,
        password,
        role: {
          connect: {
            id: parseInt(role)
          }
        }
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

    return Response.json(
      { message: 'Error while request' },
      {
        status: 400
      }
    )
  }
}
