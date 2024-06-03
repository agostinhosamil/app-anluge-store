import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { formDataToJson } from '@utils/formDataToJson'
import { NextApiProps } from 'Types/next'

type PostRequestBodyProps = {
  role: {
    permissions: Array<string>
  }
}

export const POST = async (request: NextRequest, { params }: NextApiProps) => {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const permissionIds = requestBody.role.permissions

  try {
    const role = await prisma.role.update({
      where: {
        id: parseInt(params.id)
      },

      data: {
        permissions: {
          connect: permissionIds.map(id => ({
            id: parseInt(id)
          }))
        }
      }
    })

    if (role) {
      return NextResponse.json(role)
    }
  } catch (err) {
    console.log('err >>> ', err)
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'error',
      message: 'something went wrong'
    },
    {
      status: 500
    }
  )
}
