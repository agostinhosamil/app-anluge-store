import { Category } from '@prisma/client'
import { Suspense } from 'react'

import { prisma } from '~/services/prisma'
// import { categoryIncludeFactory } from '~/utils/category'
import { CategoryListSlider } from 'store@components/NewsFeed/CategoryListSlider'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'
// import { getAllCategoriesChildren } from '~/utils/newsFeed'
// import { productIncludeFactory } from '~/utils/product'
import { CategorySectionPlaceholder } from '~/components/store/HomePagePlaceholder/CategorySectionPlaceholder'
import { CategorySection } from './CategorySection'
import { HomePage } from './HomePage'

type ContentProps = {
  categories?: Array<any>
}

type ContentComponent = React.FunctionComponent<
  React.PropsWithChildren & ContentProps
>

export const maxDuration = 60

export const Content: ContentComponent = async () => {
  const categoriesNames = [
    'Servidores e Storage',
    'Impressão e Digitalização',
    'Equipamentos Energia',
    'Computadores, Monitor e POS'
  ]

  const categoriesSlagsPrefixes = categoriesNames.map(categoryName =>
    generateSlagByTitleWithoutSignature(categoryName)
  )

  const categories: Array<Category> = await prisma.category.findMany({
    where: {
      parentId: {
        equals: null
      }
    },

    orderBy: {
      id: 'desc'
    }
  })

  return (
    <HomePage>
      {categories.length >= 1 && <CategoryListSlider categories={categories} />}
      {categoriesSlagsPrefixes.map((categorySlag, categorySlagIndex) => (
        <Suspense
          key={categorySlagIndex}
          fallback={<CategorySectionPlaceholder />}
        >
          <CategorySection categorySlag={categorySlag} />
        </Suspense>
      ))}
    </HomePage>
  )
}
