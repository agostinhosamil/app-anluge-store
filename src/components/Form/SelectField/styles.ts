import styled from 'styled-components'

type SelectFieldContainerProps = {
  $highlightOnMouseIn?: boolean
}

type ListProps = {
  $maxHeight?: 'unset' | number
}

const resolveHighlightColor = (
  highlightOnMouseIn: boolean | undefined,
  highlightColor: string
): string => {
  if (typeof highlightOnMouseIn === 'boolean') {
    return highlightOnMouseIn ? highlightColor : '#ffffff'
  }

  return highlightColor
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  display: block;
  position: relative;
`

export const SelectFieldContainer = styled.div<SelectFieldContainerProps>`
  width: 100%;
  border-radius: 0.375rem;
  display: block;
  -webkit-border-radius: 0.375rem;
  padding: 18px 12px;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #dee2e6;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  outline: 0px;

  * {
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  &:hover {
    background-color: ${props =>
      resolveHighlightColor(props.$highlightOnMouseIn, '#f8f8f8')};
  }

  &:active {
    background-color: ${props =>
      resolveHighlightColor(props.$highlightOnMouseIn, '#ebebeb')};
  }
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.span`
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FilterInput = styled.input`
  width: 100%;
  padding: 4px 0px;
  border: 0px;
  outline: 0px;
  background-color: transparent;
  cursor: text;
`

export const IconWrapper = styled.div`
  padding-left: 15px;
  display: inline-flex;
  align-items: center;
  color: #999999;
`

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top: calc(100% - 4px);
  left: 0px;
  right: 0px;
  border-width: 0px 1px 1px;
  border-style: solid;
  border-color: #dee2e6;
  background-color: #ffffff;
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  z-index: 12;
  box-shadow: 0px 20px 20px 2px rgb(0 0 0 / 30%);
`

export const List = styled.ul<ListProps>`
  width: 100%;
  height: auto;
  max-height: ${props =>
    props.$maxHeight ? `${props.$maxHeight}px` : 'unset'};
  overflow-y: auto;
  padding: 0px 0px 15px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-button {
    width: 2px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #9e9e9e;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }

  &::-webkit-scrollbar-track:active {
    background: #ffffff;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const OptionContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`

export const OptionButton = styled.button`
  width: 100%;
  height: auto;
  padding: 12px;
  border: 0px;
  outline: 0px;
  background-color: transparent;
  text-align: left;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #ebebeb;
  }
`

export const OptionElementBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const OptionIconWrapper = styled.div`
  display: inline-flex;
`

export const OptionLabelWrapper = styled.div`
  width: 100%;
  padding-left: 8px;
`

export const OptionLabel = styled.span`
  display: inline-flex;
  width: 100%;
`

export const OptionScreenButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionScreenButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  position: absolute;
  right: 12px;
  top: 5px;
  padding: 8px 16px 7px;
  border-radius: 8px;
  -webkit-border-radius: 8px;

  &:hover {
    background-color: #f0f0f0;
  }
`

export const OptionScreenButtonLabel = styled.div`
  display: inline-flex;
  padding-right: 8px;
`

export const OptionScreenButtonIcon = styled.div`
  display: inline-flex;
  align-items: center;
`

export const ListBackButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 12px;
`

export const ListBackButton = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  border: 0px;
  outline: 0px;
  padding: 7px 15px 6px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #ebebeb;
  }

  i {
    display: inline-flex;
    align-items: center;
  }

  div {
    width: 100%;
    margin-left: 8px;
  }
`

export const EmptyListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 30px;
  text-align: center;

  p {
    font-size: 16px;
    font-weight: 300;
    color: #999999;
    display: inline-flex;
  }
`
