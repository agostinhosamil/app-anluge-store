import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 40px;
`

export const Head = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
`

export const SearchInputContainer = styled.label`
  width: 100%;
  max-width: 430px;
  background-color: #ffffff;
  border-radius: 44px;
  -webkit-border-radius: 44px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: text;
  padding: 12px 13px;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    i {
      display: inline-flex;
      margin-right: 10px;
      color: #e0e0e0;
    }

    input {
      width: 100%;
      border: 0px;
      outline: 0px;
    }
  }
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const Footer = styled.div`
  width: 100%;
  display: block;
`

export const ListLoaderButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px 0px;
`

export const ListLoaderButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: 0px;
  padding: 9px 35px;
  border-radius: 40px;
  -webkit-border-radius: 40px;
  background-color: #f0f0f0;

  &:not([disabled]) {
    &:hover {
      background-color: #e0e0e0;
    }

    &:active {
      background-color: #a0a0a0;
    }
  }
`

export const List = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 120px;
  justify-content: center;
`

export const ListPaginationButtonsList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-wrap: wrap;
`

export const ListPaginationButtonsListItem = styled.li`
  display: inline-flex;
  margin: 5px;
`

type ListPaginationButtonProps = {
  $selected?: boolean
}

export const ListPaginationButton = styled(
  ListLoaderButton
).attrs<ListPaginationButtonProps>({
  type: 'button',
  role: 'button'
})`
  padding: 9px 14px;
  transition: 0.2s ease-in-out;
  background-color: ${props => (props.$selected ? '#0160bf' : '#f0f0f0')};
  color: ${props => (props.$selected ? '#ffffff' : '#333333')};

  span {
    display: flex;
    padding: 0px ${props => (props.$selected ? 12 : 4)}px;
  }

  &:not([disabled]) {
    &:hover {
      background-color: ${props => (props.$selected ? '#0454a5' : '#e0e0e0')};
    }

    &:active {
      background-color: ${props => (props.$selected ? '#044587' : '#a0a0a0')};
    }
  }
`
