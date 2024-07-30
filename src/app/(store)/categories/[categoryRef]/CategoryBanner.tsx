'use client'

import Image from '~/components/Image'
import { noEmpty, uploadedImageUrl } from '~/utils'
import { CategoryBannerContainer } from './styles'

type CategoryBannerProps = {
  categoryIcon: string | null | undefined
  categoryTitle: string
}

type CategoryBannerComponent = React.FunctionComponent<CategoryBannerProps>

export const CategoryBanner: CategoryBannerComponent = props => {
  const categoryIconPlaceHolderRe =
    /^(category-icon-placeholder)\.(jpe?g|png)$/i

  if (
    !noEmpty(props.categoryIcon) ||
    categoryIconPlaceHolderRe.test(props.categoryIcon)
  ) {
    return null
  }

  return (
    <CategoryBannerContainer>
      <Image
        alt={props.categoryTitle}
        fill={true}
        src={uploadedImageUrl(String(props.categoryIcon).concat('@large'))}
      />
    </CategoryBannerContainer>
  )
}
