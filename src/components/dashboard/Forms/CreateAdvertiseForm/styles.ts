import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const CheckButtonLabel = styled.span`
  display: inline-flex;
  padding: 7px 0px;
`

export const AdvertiseSourceTypeButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AdvertiseSourceTypeButtonWrapper = styled.div`
  width: 100%;
  width: calc(100% / 3);

  button {
    width: 100%;
    padding: 12px;
    background-color: #ebebeb;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    border: 0px;
    outline: 0px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
      display: inline-flex;
      margin-right: 8px;
    }

    &:hover {
      background-color: #dadada;
    }

    &:active {
      background-color: #d0d0d0;
    }

    &[data-selected='true'] {
      background-color: rgb(1 92 191 / 73%);
      color: #ffffff;
    }
  }

  &:nth-child(2) {
    padding: 0px 15px;
  }
`

export const AdvertiseSourceInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding-top: 19px;
`

export const AdvertiseSourceSelectButton = styled.button.attrs({
  type: 'button'
})`
  width: 100%;
  padding: 20px 12px;
  background-color: #ebebeb;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  border: 0px;
  outline: 0px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  i {
    display: inline-flex;
    margin-right: 8px;
  }

  &:hover {
    background-color: #dadada;
  }

  &:active {
    background-color: #d0d0d0;
  }
`

type CheckOptionsGroupProps = {
  $direction?: 'horizontal' | 'vertical'
  $height?: number
}

export const CheckOptionsGroup = styled.div<CheckOptionsGroupProps>`
  width: calc(100% + ${props => (props.$direction === 'vertical' ? 0 : 16)}px);
  height: ${props =>
    typeof props.$height === 'number' ? `${props.$height}px` : 'auto'};
  display: flex;
  flex-direction: ${props =>
    props.$direction === 'vertical' ? 'column' : 'row'};
  align-items: center;
  margin-left: ${props => (props.$direction === 'vertical' ? 0 : -8)}px;
`

export const CheckOptionContainer = styled.label`
  width: 100%;
  height: inherit;

  input {
    display: none;

    &:checked ~ label {
      background-color: rgb(1 92 191 / 73%);

      * {
        color: #ffffff;
      }
    }
  }
`

export const CheckOptionContent = styled.label`
  width: 100%;
  height: inherit;
  background-color: #e8e8e8;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  * {
    user-select: none;
    -webkit-user-select: none;
  }

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.018);
  }

  &:active {
    background-color: #d0d0d0;
    transform: scale(0.978);
  }
`

type CheckOptionWrapperProps = {
  $width?: string
}

export const CheckOptionWrapper = styled.div<CheckOptionWrapperProps>`
  width: ${props => props.$width || '100%'};
  height: inherit;
  display: block;
  margin: 8px;
`

export const CheckOptionBody = styled.div`
  display: inline-flex;
  text-align: center;
`

export const DropZoneLabel = styled.strong`
  display: block;
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  padding-bottom: 20px;
`
