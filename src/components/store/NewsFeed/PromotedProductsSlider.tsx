import Link from 'next/link'
import Col from 'react-bootstrap/Col'

import Image from '@components/Image'
import { prisma } from '@services/prisma'

// import { CategoryListSlider } from './CategoryListSlider'
// import { CategoryProductsList } from './CategoryProductsList'
import { Slide, TouchSlider } from '~/components/TouchSlider'
import { formatAmount, resolveProductImageUrl } from '~/utils'

export const PromotedProductsSlider = async () => {
  const promotedProducts = await prisma.product.findMany({
    where: {
      promotion: true
      // medias: {
      //   some: {
      //     id: {
      //       not: undefined
      //     }
      //   }
      // }
    },

    take: 10,
    orderBy: {
      categoryId: 'asc'
    },

    include: {
      medias: {
        take: 1
      }
    }
  })

  if (promotedProducts.length < 1) {
    return null
  }

  return (
    <Col md={4}>
      <div className="w-full h-full flex flex-col gap-4 justify-center pt-[20px] pb-[10px] pr-[8px]">
        <div className="w-full flex shadow-md bg-[#D9AFD9] bg-gradient-to-r from-purple-300 to-blue-200 px-7 pb-7 rounded-2xl flex-col justify-center gap-6 h-full">
          <strong className="block w-full pt-7 text-white font-extrabold uppercase">
            Promoções recentes
          </strong>
          <TouchSlider showIndicators={false} showButtons>
            {promotedProducts.map(product => (
              <Slide key={product.id}>
                <div className="w-[210px] h-auto flex flex-col gap-2 relative">
                  <div className="bg-zinc-400 w-full h-[210px] rounded-md">
                    <Image
                      src={resolveProductImageUrl(product, 'medium')}
                      className="rounded-md border-0 outline-none"
                      width="210"
                      height="210"
                      alt={product.name}
                    />
                  </div>
                  <Link
                    href={`/products/${product.slag}?ref=home-page.latest-promotions`}
                    className="font-light text-sm font-sans text-white text-wrap break-words line-clamp-2"
                  >
                    {product.name}
                  </Link>
                  {product.price >= 1 && (
                    <span className="text-nowrap text-white overflow-hidden text-ellipsis">
                      {formatAmount(product.price)}
                    </span>
                  )}
                </div>
              </Slide>
            ))}
          </TouchSlider>
        </div>
      </div>
    </Col>
  )
}
// background-color: #D9AFD9;
// background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
