import { Fragment, Suspense } from 'react'

import { prisma } from '@services/prisma'
import { AdvertiseGroup } from 'store@components/NewsFeed/AdvertiseGroup'
import { CategorySectionPlaceholder } from '~/components/store/HomePagePlaceholder/CategorySectionPlaceholder'
import { CategorySection } from '../CategorySection'

export default async function StoreProductsPage() {
  const categories = await prisma.category.findMany({
    where: {
      parentId: {
        equals: null
      }
    },

    select: {
      slag: true
    },

    orderBy: {
      id: 'desc'
    }
  })

  const randomCategorySlagIndex = Math.floor(categories.length * Math.random())

  return (
    <Fragment>
      <div className="w-full flex justify-center flex-col mb-[-30px]">
        <AdvertiseGroup group="top" />
      </div>
      <div className="w-full pt-4 px-[20px] block">
        {categories.map((category, categorySlagIndex) => (
          <Fragment key={categorySlagIndex}>
            {categorySlagIndex === randomCategorySlagIndex && (
              <div className="w-[calc(100%+10px)]  ml-[-15px]">
                <AdvertiseGroup group="feed" />
              </div>
            )}
            <Suspense fallback={<CategorySectionPlaceholder />}>
              <CategorySection categorySlag={category.slag} />
            </Suspense>
          </Fragment>
        ))}
      </div>
      <AdvertiseGroup group="bottom" />
    </Fragment>
  )
}
