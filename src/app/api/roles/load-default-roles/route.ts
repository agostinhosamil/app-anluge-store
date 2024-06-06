import { NextResponse } from 'next/server'
import { roles } from '~/config/cache/models/role'
import { prisma } from '~/services/prisma'

export const POST = async () => {
  try {
    const defaultRoles = await prisma.$transaction(
      roles.map(role =>
        prisma.role.upsert({
          create: role,
          update: role,
          where: {
            key: role.key
          }
        })
      )
    )

    return NextResponse.json(defaultRoles)
  } catch (err) {}

  return NextResponse.json({
    status: 'error',
    error: 'something went wrong',
    message: 'error due the request'
  })
}
