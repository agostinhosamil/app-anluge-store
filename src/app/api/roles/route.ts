import { Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import { formDataToJson } from '~/utils/formDataToJson'

type PostRequestBodyProps = {
  role: {
    key: string
    name: string
    description: string
    permissions: Array<string>
  }
}

export async function GET() {
  try {
    const roles = await prisma.role.findMany({
      include: {
        permissions: true
      }
    })

    return Response.json(roles)
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

  const { description, key, name, permissions } = requestBody.role

  const rolePermissionIds = !(permissions instanceof Array)
    ? []
    : permissions.filter(permissionId => !isNaN(Number(permissionId)))

  try {
    const role = await prisma.role.create({
      data: {
        description,
        key,
        name,
        permissions: {
          connect: rolePermissionIds.map(id => ({
            id: parseInt(id)
          }))
        }
      }
    })

    return Response.json(role)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(err)
    }

    return Response.json(
      {
        message: 'Error while request'
      },
      {
        status: 400
      }
    )
  }
}
