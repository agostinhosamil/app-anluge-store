import styled from 'styled-components'

export const TableRowsButtonsMapContainer = styled.div`
  width: 100%;
  max-width: 180px;
  height: auto;
  display: block;

  strong {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #888888;
    padding-bottom: 8px;
  }
`

export const TableRowsButtonsMapBody = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const TableRowsButtonsMapRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TableRowsButtonsMapCol = styled.div`
  width: 18px;
  height: 18px;
  padding: 2px;

  button {
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid #a0a0a0;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    background-color: transparent;
    cursor: pointer;

    &.x-selected,
    &:hover {
      border-color: #0340bf;
      background-color: #0340bf;
    }
  }
`

export const TableRowsButtonsMapFooter = styled.div`
  width: 100%;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #e0e0e0;

  button {
    width: 100%;
    border: 0px;
    background-color: transparent;
    padding: 7px 7px 5px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    font-size: 10px;
    text-align: left;
    display: flex;
    align-items: center;
    flex-direction: row;

    i {
      display: inline-flex;
      margin-right: 8px;
    }

    &:hover {
      background-color: #eaeaea;
    }
  }
`
