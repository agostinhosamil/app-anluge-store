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
  min-height: 320px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  margin-bottom: 30px;

  img {
    border-radius: inherit;
    -webkit-border-radius: inherit;
    object-fit: fill;
    position: relative;
    height: auto !important;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
`
