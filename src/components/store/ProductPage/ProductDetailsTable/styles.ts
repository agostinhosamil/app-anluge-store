import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  border-collapse: separate;
  margin: 25px 0px;
  box-shadow: 1px 2px 3px 0px rgb(0 0 0 / 9%);
`

export const Body = styled.tbody`
  width: 100%;
  height: auto;
`

export const Row = styled.tr`
  width: 100%;
  padding: 18px 14px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: stretch;

  &:nth-child(1) {
    border-top: unset;
  }
`

export const Data = styled.td`
  width: 100%;

  strong {
    font-weight: 800;
  }

  span {
    font-weight: 300;
  }

  &:nth-child(2) {
    border-left: 1px solid #e0e0e0;
    margin-left: 12px;
    padding-left: 12px;
  }
`
