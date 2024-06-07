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
