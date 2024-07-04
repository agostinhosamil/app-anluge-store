import styled from 'styled-components'

import { PlaceHolder } from '~/components/styled'

export const CategoryListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 30px 70px 0px;
`

export const ChildrenWrapper = styled(CategoryListWrapper)`
  padding-top: 0px;
`

export const CategoryBannerContainer = styled(PlaceHolder)`
  width: 100%;
  height: 320px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  margin-bottom: 30px;

  img {
    border-radius: inherit;
    -webkit-border-radius: inherit;
    object-fit: fill;
  }
`
