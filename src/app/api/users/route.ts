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
    password: string
    passwordConfirmation: string
  }
}

export async function GET() {
  const users = await prisma.user.findMany({
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

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        phone,
        password,
        role: {
          connectOrCreate: {
            where: {
              id: 1
            },

            create: {
              name: 'Guest',
              description: 'Gest user',
              key: 'guest',

              permissions: {
                connectOrCreate: {
                  where: {
                    id: 1,
                    key: 'login'
                  },
                  create: {
                    name: 'Login',
                    key: 'login',
                    description: 'User can login in the platform'
                  }
                }
              }
            }
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
  }

  return Response.json(
    { message: 'Error while request' },
    {
      status: 400
    }
  )
}
