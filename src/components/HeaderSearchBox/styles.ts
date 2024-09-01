import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 45px;
  /* border: 1px solid #ebebeb; */
  border-radius: 45px;
  -webkit-border-radius: 45px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.background.v50};
  border: 1px solid ${({ theme }) => theme.colors.background.v300}; */

  * {
    color: #303030 !important;
  }

  i {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding-left: 12px;
    margin-right: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
    }
  }

  input {
    width: 100%;
    border: 0px;
    outline: 0px;
    font-size: 15px;
    font-weight: 200;
    border-top-right-radius: inherit;
    -webkit-border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    -webkit-border-bottom-right-radius: inherit;
    padding-right: 12px;
    background-color: transparent;
  }
`

export const ExpandedContainer = styled(Container)`
  padding: 20px 15px 0px;
  border: 0px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  input {
    font-size: 19px;
    font-weight: 500;
  }

  @media (max-width: 850px) {
    /* border-top: 0px; */
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`

export const ExpandedContainerWrapper = styled.div.attrs({
  className: 'data-expanded-search-box-container-wrapper'
})`
  top: 0px;
  left: 10%;
  width: 80%;
  right: 0px;
  z-index: 2;
  height: 63px;
  position: absolute;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  box-shadow: 0px 18px 20px 9px rgb(0 0 0 / 35%);
  background-color: ${({ theme }) => theme.colors.background.v50};
  border: 1px solid ${({ theme }) => theme.colors.background.v300};

  @media (max-width: 850px) {
    width: 100%;
    left: 0px;
    right: 0px;
    box-shadow: 0px 18px 15px 0px rgb(0 0 0 / 15%);
  }
`

type SearchBoxContentProps = {
  $height?: number | 'unset'
}

export const SearchBoxContent = styled.div<SearchBoxContentProps>`
  width: 100%;
  height: auto;
  max-height: ${props =>
    typeof props.$height === 'number' ? `${props.$height}px` : 'unset'};
  background-color: #ffffff;
  padding: 20px 0px 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  /* border-width: 0px 1px 1px;
  border-style: solid;
  border-color: #cecece; */

  @media (max-width: 850px) {
    border-width: 0px;
    border-color: transparent;
  }
`

export const List = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border: 0px none #ffffff;
    border-radius: 48px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c4c4c4;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #c4c4c4;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const ListItem = styled(Link)`
  display: block;
  padding: 8px 25px;
  font-size: 16px;
  color: #333333;

  &:hover {
    background-color: #ebebeb;
  }

  &:active {
    background-color: #e0e0e0;
  }
`
