import styled from 'styled-components'

import { simpleScrollBarStyles } from '@styles/scrollbars'
import Image from 'next/image'

export const Title = styled.h1`
  font-weight: 700;
  font-size: 26px;
  color: #333333;
  padding-right: 60px;
`

export const ContentBody = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 4%;
`

export const CheckoutFormContainer = styled.form`
  width: 100%;
  height: auto;
  display: block;
`

export const CartSummaryContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 40px 0px;

  ul {
    width: 100%;
    height: 100%;
    display: block;

    li {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 25px;

      &:nth-child(1) {
        margin-top: unset;
      }

      div {
        width: 60px;
        width: 60px;
        margin-right: 19px;

        img {
          border-radius: 50%;
          -webkit-border-radius: 50%;
          outline: 0px;
          border: 0px;
          background-color: #d0d0d0;
        }
      }

      data {
        display: inline-flex;
        width: 100%;
        align-items: center;
      }
    }
  }

  @media (min-width: 1200px) {
    max-height: 850px;
    padding-right: 60px;

    ul {
      max-height: 770px;
      overflow-y: auto;
      padding: 40px;
      border: 1px solid #d1d1d1;
      border-radius: 8px;
      -webkit-border-radius: 8px;

      ${simpleScrollBarStyles}
    }
  }
`

export const SubTitle = styled.h2`
  width: 100%;
  height: auto;
  display: block;
  padding: 12px 0px;
  font-weight: 400;
  color: #222222;
  text-transform: uppercase;
  font-size: 14px;
  padding-right: 60px;
`

export const Paragraph = styled.p`
  width: 100%;
  height: auto;
  display: block;
  padding: 0px;
  margin: 0px;
  font-size: 11px;
  color: #adadad;
  padding-right: 60px;
`

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  padding: 24px;
  margin: 35px 0px;
`

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CardAvatarWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 22px;
`

export const CardAvatar = styled(Image)`
  border: 0px;
  outline: 0px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
`

export const CardData = styled.data`
  width: 100%;
  display: inline-flex;
  flex-direction: column;

  * {
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
  }
`

export const CardTitle = styled.strong`
  font-size: 25px;
  font-weight: 700;
  color: #444444;
`

export const CardSubTitle = styled.span`
  color: #6d6c6c;
  font-size: 14px;
`
