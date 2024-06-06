import { NextResponse } from 'next/server'
import { permissions } from '~/config/cache/models/permission'
import { prisma } from '~/services/prisma'

export const POST = async () => {
  try {
    const defaultPermissions = await prisma.$transaction(
      permissions.map(permission =>
        prisma.permission.upsert({
          create: permission,
          update: permission,
          where: {
            key: permission.key
          }
        })
      )
    )

    return NextResponse.json(defaultPermissions)
  } catch (err) {}

  return NextResponse.json({
    status: 'error',
    error: 'something went wrong',
    message: 'error due the request'
  })
}
