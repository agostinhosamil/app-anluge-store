import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { NextApiProps } from 'Types/next'

type Params = {
  id: string
}

export const GET = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const role = await prisma.role.findUnique({
    where: {
      id: parseInt(params.id)
    },

    include: {
      permissions: true
    }
  })

  if (role) {
    return NextResponse.json(role)
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not found',
      message: 'role not found'
    },
    {
      status: 404
    }
  )
}
