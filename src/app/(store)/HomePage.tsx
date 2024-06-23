'use client'

import { NewsFeed } from 'store@components/NewsFeed'
import { PageContainer } from 'store@components/styles'
import { CategoryProps } from '~/Types/Category'

type HomePageProps = {
  categories: Array<CategoryProps>
}

type HomePageComponent = React.FunctionComponent<HomePageProps>

export const HomePage: HomePageComponent = ({ categories }) => {
  return (
    <PageContainer>
      <NewsFeed categories={categories} />
    </PageContainer>
  )
}
