import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 50px 50px 0px;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 35px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-color: #ebebeb;

  h1 {
    display: block;
    font-size: 22px;
    font-weight: 500;
    color: #404040;
  }

  ol {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;

    * {
      user-select: none;
      -webkit-user-select: none;
    }

    li {
      display: inline-flex;
      padding: 0px 21px 0px 0px;

      button {
        font-size: 13px;
        background-color: transparent;
        border: 0px;
        outline: 0px;
        font-weight: 400;
        color: #0160bf;
        display: flex;

        i {
          display: inline-flex;
          margin-right: 8px;
        }

        span {
          display: inline-flex;
          margin-top: -3px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 35px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-color: #ebebeb;
  margin-top: 20px;
`

export const MainListWrapper = styled(ListWrapper)`
  padding: 0px;
`

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 0px 0px;
`

export const SubmitButton = styled.button`
  width: 100%;
  border: 0px;
  padding: 13px 20px;
  border-radius: 35px;
  background-color: #0160bf;
  color: #ffffff;
`

export const CheckoutForm = styled.form`
  width: 100%;
  height: auto;
  display: block;

  h1 {
    font-size: 25px;
    color: #444444;
    display: block;
    margin-bottom: 10px;
  }

  p {
    display: block;
    margin-bottom: 20px;
  }

  h1,
  p {
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
  }
`

export const StaticCheckoutFormWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const FixedCheckoutFormWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 41.66666667%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 30px 0px 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
  }

  @media (min-width: 992px) {
    width: 33.33333333%;
  }
`

export const CheckOutFormWrapper = styled(ListWrapper)`
  margin-top: unset;
`

export const CheckoutMessageWrapper = styled.div`
  width: 100%;
  padding: 20px 0px 0px;

  p {
    display: block;
    font-size: 14px;
    color: #888888;
  }
`

export const StyledLink = styled(Link)`
  font-size: inherit;
  color: #0450bf;

  &:hover {
    text-decoration: underline;
  }
`
