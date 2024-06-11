import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`

export const InputRowWrapper = styled.div`
  width: 100%;
  display: inline-flex;

  & > div.row {
    width: 100%;
  }
`

export const InputButtonWrapper = styled.div`
  width: 57px;
  height: 57px;
  margin-left: -11px;

  button {
    width: 57px;
    height: 57px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #e8e8e8;
    color: #616060;
    border: 0px;
    border-radius: 8px;

    &:hover {
      background-color: #d1d1d1;
    }

    &:active {
      background-color: #bbbbbb;
    }
  }
`

export const CompanyDataForm = styled.form`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(255 255 255 / 87%);
  border-radius: 12px;
  -webkit-border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9385;
  z-index: 3;
  cursor: not-allowed;
`
