import { NextResponse } from 'next/server'
import { prisma } from '~/services/prisma'

export const GET = async () => {
  const products = await prisma.product.findMany({
    include: {
      medias: true
    }
  })

  const productsWithNoMedia = products.filter(
    product => product.medias.length < 1 && product.status === 'AVAILABLE'
  )

  return NextResponse.json({
    count: productsWithNoMedia.length,
    data: productsWithNoMedia.map(({ code, name }) => ({
      code: encodeURIComponent(String(code)),
      name
    }))
  })
}
