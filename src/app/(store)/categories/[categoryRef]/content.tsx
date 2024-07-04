'use client'

import { CategoryProductsList } from '~/components/store/NewsFeed/CategoryProductsList'
import { Container } from '~/components/styled'
import { CategoryProps, CategoryWithProductId } from '~/Types/Category'

import { CategoryListWrapper, ChildrenWrapper } from './styles'

type ContentProps = {
  category: CategoryProps | CategoryWithProductId
}

type ContentComponent = React.FunctionComponent<
  React.PropsWithChildren & ContentProps
>

export const Content: ContentComponent = ({ category, ...props }) => {
  return (
    <Container>
      <CategoryListWrapper>
        <CategoryProductsList category={category} />
      </CategoryListWrapper>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </Container>
  )
}
