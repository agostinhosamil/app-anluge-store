import Link from 'next/link'
import styled, { css } from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 40px 20px;
  text-align: center;
  margin: auto;

  form {
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h1`
  font-size: 57px;
  font-weight: 900;
  max-width: 80%;
  margin: auto;
  display: block;
`

export const SubTitle = styled.h2`
  font-size: 43px;
  font-weight: 700;
`

export const Paragraph = styled.p`
  width: 82%;
  display: block;
  margin: 45px auto;
  font-size: 24px;
  font-weight: 300;
`

export const CheckOptionsGroup = styled.div`
  width: 100%;
  height: auto;
  /* box-shadow: 0px 0px 17px 2px rgb(0 0 0 / 10%); */
  border-radius: 16px;
  -webkit-border-radius: 16px;
  margin: 20px auto 40px;
  padding: 75px 45px;

  strong {
    display: block;
    font-size: 25px;
    font-weight: 700;
    color: #606060;
    padding: 40px 10%;
    line-height: 30px;
  }
`

export const CheckOptionsList = styled.ol`
  width: 100%;
  padding: 45px 40px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  li {
    width: calc(100% / 3 - 20px);
    height: auto;
    display: block;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    box-shadow: 0px 0px 5px 1px rgba(0 0 0 / 13%);

    input[type='radio']:checked ~ label {
      background-color: rgb(140 11 11 / 35%);

      * {
        color: #ffffff;
      }
    }

    input[type='radio'] {
      display: none;
    }

    label {
      display: block;
      width: 100%;
      height: 100%;
      padding: 35px;
      position: relative;
      border-radius: inherit;
      -webkit-border-radius: inherit;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;

      * {
        user-select: none;
        -webkit-user-select: none;
      }

      span {
        font-weight: 900;
        font-size: 18px;
        line-height: 17px;
      }

      p {
        font-weight: 300;
        margin-top: 12px;
        font-size: 12px;
      }
    }
  }
`

export const OrderItemsSliderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 45px 20px;
`

export const OrderItem = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  border: 0px;
  position: relative;
  gap: 7px;

  div {
    width: 100%;
    height: 280px;
    background-color: #e0e0e0;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    box-shadow: rgb(0 0 0 / 28%) 2px 2px 12px 3px;
  }

  strong {
    font-size: 14px;
    font-weight: 300;
    word-break: break-word;
    white-space: break-spaces;
    display: -webkit-box;
    width: 100%;
    padding: 15px 0px 9px;
    overflow-y: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    height: 100px;
  }

  span {
    display: inline-block;
    font-weight: 900;
    font-size: 21px;
  }
`

export const OptionalLinksListWrapper = styled.div`
  width: 100%;
  padding: 60px 0px;
  text-align: left;
`

const optionalLinkColors = {
  blue: css`
    background-color: #e4f8fa;
    border-color: #b2ebf2;
    color: #153438;
  `,

  green: css`
    background-color: #f4fae3;
    border-color: #e1f2b2;
    color: #869759;
  `,

  violet: css`
    background-color: rgb(246 83 243 / 9%);
    border-color: #f653f3;
    color: #a933a7;
  `,

  yellow: css`
    background-color: rgb(247 247 1 / 9%);
    border-color: #f7f701;
    color: #b0b009;
  `
}

type OptionalLinkProps = {
  $color?: keyof typeof optionalLinkColors
}

export const OptionalLink = styled(Link)<OptionalLinkProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  transition: all 0.3s ease-in-out;
  ${props => optionalLinkColors[props.$color || 'blue']}

  &:hover {
    transform: scale(1.04185);
  }

  * {
    color: inherit;
  }

  i {
    display: inline-flex;
    font-size: 35px;
    margin-right: 22px;
  }

  data {
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: 8px;

    strong {
      font-weight: 800;
      font-size: 16px;
    }

    span {
      font-size: 12px;
    }
  }
`

export const SubmitButton = styled.button`
  background-color: rgb(255 0 0 / 10%);
  color: #840e0e;
  border: 1px solid #840e0e;
  border-radius: 120px;
  -webkit-border-radius: 120px;
  padding: 21px 85px;
  outline: 0px;

  &:hover {
    background-color: rgb(255 0 0 / 25%);
  }

  &:active {
    background-color: rgb(255 0 0 / 35%);
  }
`

export const CancelLink = styled(Link)`
  margin: 35px auto 0px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    display: inline-flex;
    margin-right: 7px;
  }

  &:hover {
    text-decoration: underline;
  }
`
