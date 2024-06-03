import { Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import { formDataToJson } from '~/utils/formDataToJson'

type PostRequestBodyProps = {
  permission: {
    key: string
    name: string
    description: string
  }
}

export async function GET() {
  try {
    const permissions = await prisma.permission.findMany({
      include: {
        roles: true
      }
    })

    return Response.json(permissions)
  } catch (err) {
    return Response.json({
      status: 'error',
      error: 'internal',
      message: 'something went wrong'
    })
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const { description, key, name } = requestBody.permission

  try {
    const permission = await prisma.permission.create({
      data: {
        description,
        key,
        name
      }
    })

    return Response.json(permission)
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
