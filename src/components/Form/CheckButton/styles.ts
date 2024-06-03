import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const ButtonElement = styled.label`
  cursor: pointer;
  background-color: #ebebeb;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 9px 12px;

  * {
    user-select: none;
    -webkit-user-select: none;
  }

  & > input {
    display: none;

    &:checked ~ div.check-icon-wrapper div {
      background-color: #0340bf;
      width: 25px;
      border-radius: 10px;
      -webkit-border-radius: 10px;
    }
  }

  &:hover {
    background-color: #e0e0e0;
  }
`

export const CheckIconWrapper = styled.div`
  display: inline-flex;
  margin-right: 12px;
`

export const CheckIcon = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  transition: all 0.3s ease-in-out;
`

export const ButtonElementWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`
