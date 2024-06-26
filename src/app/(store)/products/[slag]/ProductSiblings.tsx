import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CategoryProductsList } from '~/components/store/NewsFeed/CategoryProductsList'
import { prisma } from '~/services/prisma'
import { CategoryProps } from '~/Types/Category'
import { ProductProps } from '~/Types/Product'
import { categoryIncludeFactory } from '~/utils/category'
import {
  categoryListToTree,
  getCategoryFromList
} from '~/utils/models/category'
import { productIncludeFactory } from '~/utils/product'

type ProductSiblingsProps = {
  product: ProductProps
}

export const ProductSiblings = async (props: ProductSiblingsProps) => {
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

  const productCategory = getCategoryFromList(
    props.product.categoryId || '<<non-existing-category>>',
    categoryListToTree(categories)
  )

  if (!productCategory) {
    return null
  }

  return (
    <Row>
      <Column md={12}>
        <CategoryProductsList
          flatListProps={{
            itemsCountPerIteration: 15,
            placeholderCountOnLoading: 15
          }}
          category={productCategory}
          title="Mais produtos da categoria $0"
        />
      </Column>
    </Row>
  )
}
