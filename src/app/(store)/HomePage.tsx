'use client'

import { NewsFeed } from 'store@components/NewsFeed'
import { PageContainer } from 'store@components/styles'
// import { CategoryProps } from '~/Types/Category'

// type HomePageProps = {
//   categories: Array<CategoryProps>
// }

type HomePageComponent = React.FunctionComponent<React.PropsWithChildren> // & HomePageProps

export const HomePage: HomePageComponent = ({ ...props }) => {
  return (
    <PageContainer>
      <NewsFeed>
        {/* <CategoryListSlider categories={categories} /> */}
        {props.children}
      </NewsFeed>
    </PageContainer>
  )
}
