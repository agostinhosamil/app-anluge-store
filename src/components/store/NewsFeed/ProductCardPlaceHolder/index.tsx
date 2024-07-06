'use client'

// import React from 'react'
import { Fragment } from 'react'
import * as Styled from './styles'

export const ProductCardPlaceHolder: React.FunctionComponent = () => {
  return (
    <Styled.Container>
      <Fragment>
        <Styled.Content>
          <Styled.ImageWrapper />
          <Styled.Name />
          <Styled.Description>
            <p />
            <p />
            <p />
            <p />
          </Styled.Description>
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
