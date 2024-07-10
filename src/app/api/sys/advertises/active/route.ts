import { NextResponse } from 'next/server'
import { NextApiHandler } from '~/Types/next'
import { getActiveAdvertises } from '~/utils/advertise'

export const GET: NextApiHandler = async () => {
  try {
    const activeAdvertises = await getActiveAdvertises()

    return NextResponse.json(activeAdvertises)
  } catch (err) {
    return NextResponse.json({
      error: true,
      success: false,
      message: 'something went wrong'
    })
  }
}
