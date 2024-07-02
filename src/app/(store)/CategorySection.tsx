import { Fragment, Suspense } from 'react'
import { CategoryProductsList } from '~/components/store/NewsFeed/CategoryProductsList'
import { prisma } from '~/services/prisma'
import { CategoryWithProductId } from '~/Types/Category'
import { getCategoryChildrenById } from '~/utils/newsFeed'

type CategorySectionProps = {
  categorySlag: string
}

type CategorySectionComponent = React.FunctionComponent<
  React.PropsWithChildren & CategorySectionProps
>

export const CategorySection: CategorySectionComponent = async props => {
  const categoryData = await prisma.category.findFirst({
    where: {
      slag: {
        startsWith: props.categorySlag
      }
    },
    include: {
      categories: {
        include: {
          categories: {
            select: {
              id: true
            }
          },

          products: {
            select: {
              id: true
            }
          }
        }
      },
      products: {
        select: {
          id: true
        }
      }
    }
  })

  if (!categoryData) {
    return null
  }

  const category: CategoryWithProductId =
    await getCategoryChildrenById(categoryData)

  return (
    <Fragment>
      <Suspense fallback={<h1>Loading category data...</h1>}>
        <CategoryProductsList category={category} />
      </Suspense>
    </Fragment>
  )
}
