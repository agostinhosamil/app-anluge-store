// import React from 'react'
import { Fragment } from 'react'
import * as Styled from './styles'

type ProductCardPlaceHolderProps = {
  name: string
  image: string
  description: string
}

export const ProductCardPlaceHolder: React.FunctionComponent<
  ProductCardPlaceHolderProps
> = props => {
  return (
    <Styled.Container>
      <Fragment>
        <Styled.Content>
          <Styled.ImageWrapper />
          <Styled.Name />
          <Styled.Description />
          <Styled.StatsData>
            <div />
            <div />
          </Styled.StatsData>
          <Styled.MetaData>
            <Styled.Price>
              <h3 />
            </Styled.Price>
          </Styled.MetaData>
        </Styled.Content>
      </Fragment>
      <Styled.AsideContainer>
        <Styled.AsideBody>
          <ul>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
          </ul>
        </Styled.AsideBody>
      </Styled.AsideContainer>
    </Styled.Container>
  )
}
