import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import { categoryListToTree } from '~/utils/models/category'
import { productIncludeFactory } from '~/utils/product'
import { HomePage } from './HomePage'

export default async function Home() {
  const categoriesIds = [
    '10098327474662369821717853708516578325759404',
    '10085482758819828541717853708535895519846167',
    '10080304913879131371717853708572590950098600',
    '100934909248215462217178537085271083968355101'
  ]

  const categories: Array<CategoryProps> = await prisma.category.findMany({
    include: {
      categories: {
        include: categoryIncludeFactory()
      },
      products: {
        include: productIncludeFactory()
      }
    }
  })

  const categoriesTree = categoryListToTree(categories)

  return (
    <HomePage
      categories={categoriesTree.filter(category =>
        categoriesIds.includes(category.id)
      )}
    />
  )
}
