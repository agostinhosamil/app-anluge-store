import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const TopHeaderContainer = styled.div`
  width: 100%;
  padding: 25px 25px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  & > div.container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const TopHeaderMenu = styled.div`
  width: 100%;
  display: block;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      padding: 0px 25px;
      border-left: 2px solid #cecece;

      a {
        font-size: 11px;
        text-transform: uppercase;
        color: #333333;
        font-weight: 400;

        &:hover {
          text-decoration: underline;
        }

        @media (min-width: 801px) and (max-width: 1000px) {
          font-size: 7px;
        }
      }

      &.selected a {
        background-color: #ababab;
        border-radius: 16px;
        -webkit-border-radius: 37px;
        padding: 9px 14px;
        color: #ffffff;
        font-weight: 700;

        &:hover {
          text-decoration: unset;
        }
      }

      @media (max-width: 1170px) {
        padding: 0px 8px;
      }
    }

    li:nth-child(1) {
      padding-left: 0px;
      border-left: unset;
    }

    @media (max-width: 1000px) {
      justify-content: center;
    }
  }
`

export const TopHeaderData = styled(TopHeaderMenu)`
  width: 100%;

  ul {
    justify-content: flex-end;

    li {
      position: relative;
      display: flex;
      flex-direction: row;
      color: #555555;
      align-items: center;

      i {
        display: block;
        margin: -5px 9px 0px 0px;
      }

      span {
        font-size: 9px;
        font-weight: 500;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }

    @media (max-width: 1000px) {
      justify-content: center;
      padding: 40px 0px 0px;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      li {
        margin-top: -34px;

        * {
          font-size: 9px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`

export const HeaderBodyContainer = styled.div`
  width: 100%;
  height: 630px;
  background-color: #0470bf;
  margin: 6px 0px 0px;
  background-image: linear-gradient(3deg, rgb(5 24 38 / 65%), transparent);
  background-image: -webkit-linear-gradient(
    3deg,
    rgb(5 24 38 / 65%),
    transparent
  );

  & > div {
    height: 100%;
  }

  @media (max-width: 1000px) {
    height: 420px;
  }

  @media (max-width: 650px) {
    height: 360px;
  }
`

export const HeaderBodyRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 35px;
`

export const HeaderBodyCol = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    &.home-page-description {
      display: none;
    }
  }
`

export const HeaderDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 55px;

  h1,
  p {
    color: #ffffff;
  }

  h1 {
    margin-bottom: 14px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 12px;
      margin: 0px;
    }
  }
`

export const HeaderSearchBoxWrapper = styled.div`
  width: 100%;
  padding: 18px 0px 0px;
`

export const SliderImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`

export const HeaderCategoryListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #04406c;
  border-style: solid;
  border-width: 1px 0px;
  border-color: #0d3a5c;
  padding: 15px 25px;

  ul {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0px 12px;
    overflow: hidden;

    li {
      margin: 0px 7px;
      position: relative;

      a,
      button {
      }
    }

    li:nth-child(1) {
      margin-left: 13px;
    }
  }
`

export const EllipsisButtonWrapper = styled.div`
  width: 30px;
  margin-left: 25px;

  button {
    width: 20px;
    height: 20px;
    border: 0px;
    outline: 0px;
    background-color: #ffffff;
    color: #04406c;
    font-size: 18px;
    border-radius: 50%;

    font-size: 14px;
  }
`

const headerCategoryListItemButtonStyles = css`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;
  padding-right: 36px;
  white-space: nowrap;
  border: 0px;
  outline: 0px;
  background-color: transparent;

  &:before {
    content: '';
    display: block;
    border-style: solid;
    border-color: transparent transparent transparent #ffffff;
    border-width: 6px;
    transform: rotate(90deg);
    position: absolute;
    top: calc(50% - 1px);
    left: -24px;
  }

  * {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`

export const HeaderCategoryListItemButton = styled.button`
  ${headerCategoryListItemButtonStyles}
`

export const HeaderCategoryListItemLink = styled(Link)`
  ${headerCategoryListItemButtonStyles}
`

export const HeaderMenuStaticWrapper = styled.div`
  width: 100%;
  height: auto;
`

export const HeaderMenuFixedWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px 10px 15px rgb(0 0 0 / 24%);
  z-index: 4;
`

export const HeaderMenuShadow = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
`
