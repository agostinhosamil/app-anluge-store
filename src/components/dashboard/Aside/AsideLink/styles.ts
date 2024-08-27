import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  & > a,
  & > button {
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    padding: 4px 12px 7px;
    border-radius: 8px;
  }
`

export const IconWrapper = styled.div`
  width: max-content;

  div {
    width: 100%;
    font-size: 22px;
    color: inherit;
  }
`

export const Body = styled.div`
  width: 100%;
  padding-left: 8px;
`

export const Label = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: inherit;
  margin-top: 2px;
  color: inherit;
  text-align: left;
`

export const List = styled.div`
  width: 100%;
  padding: 15px 0px 0px 25px;
`
