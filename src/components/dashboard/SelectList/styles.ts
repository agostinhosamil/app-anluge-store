import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 25px;
`

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  padding: 9px 12px;

  i {
    display: inline-flex;
    font-size: 18px;
    color: #909090;
    margin-right: 8px;
    font-weight: 300;
  }

  div {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    input {
      width: 100%;
      font-size: 19px;
      color: #404040;
      font-weight: 300;
      background-color: transparent;
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

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  margin-bottom: 7px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  border: 0px;
  outline: 0px;
  padding: 15px 12px;

  div {
    width: 100%;

    strong {
      width: 100%;
      display: block;
      text-align: left;
    }

    span {
      width: 100%;
      display: block;
      text-align: right;
    }
  }

  div:nth-child(2) {
    justify-content: flex-end;
  }

  i {
    display: inline-flex;
    margin-left: 8px;
  }
`
