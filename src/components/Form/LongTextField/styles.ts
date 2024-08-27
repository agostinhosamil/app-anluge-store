import styled from 'styled-components'

type ContainerProps = {
  $focus?: boolean
}

export const Container = styled.label<ContainerProps>`
  width: 100%;
  border-radius: 0.375rem;
  display: block;
  -webkit-border-radius: 0.375rem;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  margin-bottom: 1rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  box-shadow: ${props =>
    props.$focus ? '0 0 0 .25rem rgba(13,110,253,.25)' : 'none'};
  border-color: ${props => (props.$focus ? '#86b7fe' : '#dee2e6')};
  cursor: text;

  * {
    cursor: inherit;
  }
`

export const Body = styled.div`
  width: 100%;
  display: block;
`

export const LabelWrapper = styled.div`
  width: 100%;
  padding: 0px 0px 8px;
  display: block;
`

export const Label = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    font-size: 16px;
    overflow: hidden;
    resize: none;
  }
`
