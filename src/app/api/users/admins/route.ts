import { prisma } from '@services/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { formDataToJson } from '~/utils/formDataToJson'

type PostRequestBodyProps = {
  user: {
    id: string
  }

  role: {
    id: string
  }
}

const changeUserRole = async (requestBody: PostRequestBodyProps) => {
  const { user, role } = requestBody

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id
      },

      data: {
        role: {
          connect: {
            id: parseInt(role.id)
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

    return NextResponse.json(updatedUser)
  } catch (err) {}

  return NextResponse.json({
    status: 'error',
    error: 'not-updated',
    message: 'could not update user'
  })
}

/**
 * Add a new admin in the system
 */
export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const { user, role } = requestBody

  return await changeUserRole(requestBody)
}

/**
 * Remove an admin, change role to the default whish should be guest
 */
export async function PATCH(request: NextRequest) {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  return await changeUserRole({
    ...requestBody,
    role: {
      id: '1'
    }
  })
}

/**
 * Get whole admins
 */
export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      role: {
        include: {
          permissions: true
        }
      }
    },
    where: {
      role: {
        isNot: {
          id: 1
        }
      }
    }
  })

  return Response.json(users)
}
