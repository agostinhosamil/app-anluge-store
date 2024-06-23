import { prisma } from '@services/prisma'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { CategoryListSlider } from '~/components/store/NewsFeed/CategoryListSlider'
import { CategoryProps } from '~/Types/Category'
import { categoryIncludeFactory } from '~/utils/category'
import {
  categoryListToTree,
  getCategoryFromList
} from '~/utils/models/category'
import { productIncludeFactory } from '~/utils/product'
import { Content } from './content'

type Params = {
  categoryRef: string
}

type CategoryPageProps = {
  params: Params
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // const category = await prisma.category.findFirst({
  //   where: {
  //     OR: [
  //       {
  //         id: params.categoryRef
  //       },
  //       {
  //         slag: params.categoryRef
  //       }
  //     ]
  //   }
  // })

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

  const foundCategory = categories.find(category => {
    return Boolean(
      category.id === params.categoryRef || category.slag === params.categoryRef
    )
  })

  if (!foundCategory) {
    return <NotFoundPageContent />
  }

  const category = getCategoryFromList(
    foundCategory.id,
    categoryListToTree(categories)
  )

  const otherCategories = categories.filter(({ id }) => id !== foundCategory.id)

  return !category ? (
    <NotFoundPageContent />
  ) : (
    <Content category={category}>
      <CategoryListSlider
        categories={otherCategories}
        title="Outras categorias"
      />
    </Content>
  )
}
