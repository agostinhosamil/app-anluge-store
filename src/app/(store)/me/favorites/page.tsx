import { redirect } from 'next/navigation'
import { Fragment, Suspense } from 'react'

import { prisma } from '@services/prisma'
import { auth } from '@utils/auth'
import { getCurrentPagePath } from '@utils/server'
import { CategorySectionPlaceholder } from 'store@components/HomePagePlaceholder/CategorySectionPlaceholder'
import { CategoryMapSlider } from 'store@components/NewsFeed/CategoryMapSlider'
import { ProductCardWrapper } from 'store@components/NewsFeed/CategoryProductsList/ProductCardWrapper'
import { noEmpty } from '~/utils'

import { AdvertiseGroup } from '~/components/store/NewsFeed/AdvertiseGroup'
import { CategorySection } from '../../CategorySection'
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

  const allProducts = favorites.map(({ product }) => product)
  const productsByCategory = groupProductsByCategory(allProducts)

  const productGroups = Object.values(productsByCategory).filter(
    ({ products }) => products.length >= 1
  )

  const favoritesProductsCategoriesSlags = Object.keys(productsByCategory)
    .filter(slag => noEmpty(slag))
    .slice(0, 4)

  return (
    <div className="w-full flex flex-col">
      <div className="bg-zinc-100 w-full flex flex-col justify-end px-14 py-8 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <h1>Lista de desejos</h1>
      </div>
      <div className="w-full flex flex-col pt-8 px-14">
        {productGroups.map(({ category, products }) => (
          <Fragment key={category.id}>
            <h2>{category.title}</h2>
            <div className="pt-3 flex flex-wrap flex-row">
              {products.map(product => (
                <ProductCardWrapper product={product} key={product.id} />
              ))}
            </div>
          </Fragment>
        ))}
        {productGroups.length < 1 && (
          <div className="p-48 w-full flex flex-row justify-center items-center text-center">
            <h5>A sua lista de desejos está vazia...</h5>
            <p>
              Poderá ver os seus itens favoritos por aqui quando tiver marcado
              algum.
            </p>
          </div>
        )}
      </div>
      <div className="w-full block pt-12">
        <CategoryMapSlider rows={3} />
      </div>
      <div className="w-full px-14">
        <AdvertiseGroup group="feed" />
      </div>
      <div className="w-full px-14 pt-2 pb-8">
        <h1 className="font-extrabold uppercase text-center max-w-2xl w-full block m-auto">
          Mais produtos que te podem interessar
        </h1>
      </div>
      {favoritesProductsCategoriesSlags.map((slag, slagIndex) => (
        <div key={slagIndex} className="w-full px-14 bg-white text-zinc-900">
          <Suspense fallback={<CategorySectionPlaceholder />}>
            <CategorySection categorySlag={slag} />
          </Suspense>
        </div>
      ))}
    </div>
  )
}
