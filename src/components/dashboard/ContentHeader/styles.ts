import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px 0px 30px;
  flex-direction: row;
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: inline-flex;

  h1 {
    margin-top: -3px;
  }
`

export const ActionsListWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const ActionsList = styled.ol`
  display: inline-flex;
  flex-direction: row;
`

export const ActionButtonContainer = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 4px;
`

export const ActionButtonElement = styled.button`
  background-color: #0160bf;
  color: #ffffff;
  padding: 6px 22px;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  border: 0px;
  outline: 0px;
  transition: transform 0.1297s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #075baf;
  }

  &:active {
    background-color: #08539d;
    transform: scale(0.98823);
  }

  &:disabled {
    background-color: #0160bf !important;

    &:active {
      transform: unset;
    }
  }
`

export const IconWrapper = styled.div`
  display: inline-flex;
  padding: 0px 4px;
`

export const LabelWrapper = styled.div`
  display: inline-flex;
  padding: 0px 4px;
`
