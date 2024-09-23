import { NextResponse } from 'next/server'
import { NextApiHandler } from '~/Types/next'

type Params = {
  refuge: Array<string>
}

export const GET: NextApiHandler<Params> = (request, { params }) => {
  console.log(params)

  return NextResponse.json(params.refuge)
}
