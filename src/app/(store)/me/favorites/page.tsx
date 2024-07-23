import { redirect } from 'next/navigation'
import { Fragment } from 'react'

import { prisma } from '@services/prisma'
import { auth } from '@utils/auth'
import { getCurrentPagePath } from '@utils/server'

import { ProductCardWrapper } from '~/components/store/NewsFeed/CategoryProductsList/ProductCardWrapper'
import { groupProductsByCategory } from './utils'

export default async function FavoritesCart() {
  const userSignInData = await auth()

  if (!userSignInData) {
    return redirect(`/login?next=${encodeURIComponent(getCurrentPagePath())}`)
  }

  const favorites = await prisma.favorite.findMany({
    where: {
      userId: userSignInData.user.id
    },

    include: {
      product: {
        include: {
          category: {
            select: {
              id: true,
              title: true,
              slag: true
            }
          }
        }
      }
    }
  })

  const products = favorites.map(({ product }) => product)
  const productsByCategory = groupProductsByCategory(products)

  return (
    <div className="w-full flex flex-col pt-14 px-14">
      <h1>Lista de desejos</h1>
      <div className="w-full flex flex-col p-3">
        {Object.values(productsByCategory).map(({ category, products }) => (
          <Fragment key={category.id}>
            <h2>{category.title}</h2>
            <div className="pt-3 flex flex-wrap flex-row">
              {products.map(product => (
                <ProductCardWrapper product={product} key={product.id} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
