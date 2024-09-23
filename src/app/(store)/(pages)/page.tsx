import { Suspense } from 'react'

import { HomePagePlaceholder } from '~/components/store/HomePagePlaceholder'

import { Content } from './content'

export default async function Home() {
  // const categoriesTree = categoryListToTree(
  //   await getAllCategoriesChildren(categories)
  // )

  // categoriesTree.filter(category =>
  //   categoriesSlagsPrefixes.includes(
  //     generateSlagByTitleWithoutSignature(category.title)
  //   )
  // )

  // console.log('>>> categories: ', categories)

  return (
    <Suspense fallback={<HomePagePlaceholder />}>
      <Content />
    </Suspense>
  )
}
