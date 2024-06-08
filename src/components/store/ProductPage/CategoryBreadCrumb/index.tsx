import { Fragment } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

import { ProductProps } from '~/Types/Product'
import { Container } from './styles'

type CategoryBreadCrumbProps = {
  product?: ProductProps
}

type CategoryBreadCrumbComponent =
  React.FunctionComponent<CategoryBreadCrumbProps>

export const CategoryBreadCrumb: CategoryBreadCrumbComponent = ({
  product
}) => {
  if (!(product && product.category)) {
    return null
  }

  const categoryPath = [product.category.title]

  return (
    <Container>
      <span>
        {categoryPath.map((category, categoryIndex) => (
          <Fragment key={categoryIndex}>
            <i>
              <FaAngleRight />
            </i>
            {category}
          </Fragment>
        ))}
      </span>
    </Container>
  )
}
