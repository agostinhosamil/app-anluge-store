import styled from 'styled-components'

import { PlaceHolder } from '@components/styled'

export const HomePageContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 40px 20px 0px;
`

export const AdPanel = styled(PlaceHolder)`
  width: 100%;
  height: 420px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  margin-bottom: 30px;
`

export const Title = styled(PlaceHolder)`
  width: 100%;
  max-width: 520px;
  height: 38px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
`

export const CategoryCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: nowrap;
  overflow-x: hidden;
  margin: 30px 0px;
`

export const CategoryCard = styled(PlaceHolder)`
  width: 355px;
  height: 202px;
  border-radius: 8px;
  -webkit-border-radius: 8px;

  div {
    width: 355px;
    height: 202px;
  }
`

export const NewsFeedContainer = styled.div`
  width: calc(100% + 24px);
  height: auto;
  margin-left: -12px;
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
