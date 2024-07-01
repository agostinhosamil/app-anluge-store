import { NextResponse } from 'next/server'
import { NextApiHandler } from '~/Types/next'
import { getRequestBody } from '~/utils/server/getRequestBody'

export const POST: NextApiHandler = async request => {
  const requestBody = await getRequestBody(request)

  return NextResponse.json(requestBody)
}
