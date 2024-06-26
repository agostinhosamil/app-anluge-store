import { Suspense } from 'react'
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
    <Suspense fallback={<h1>Loading...</h1>}>
      <Content />
    </Suspense>
  )
}
