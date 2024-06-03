import styled from 'styled-components'

const inputFieldWith = 400

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  background-color: #eeeff7;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  padding: 40px 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #858585;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #858585;
  }
  &::-webkit-scrollbar-track {
    background: #d1d1d1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #c7c7c7;
  }
  &::-webkit-scrollbar-track:active {
    background: #c9c9c9;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 0px 0px 40px;
`

export const ListWrapper = styled.div``

export const List = styled.ul``

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;

  button {
    border: 0px;
    outline: 0px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #0160bf;

    i {
      display: inline-flex;
      margin-right: 8px;
    }

    &:hover {
      color: #034d97;
    }
  }
`

export const CategoryInputFieldContainer = styled.div`
  width: ${inputFieldWith}px;
  position: relative;
`

export const InputFieldWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  border: 1px solid #cbcbcb;
  background-color: #ffffff;
  margin-top: 1.5rem;
  max-width: inherit;
`

export const FileInputWrapper = styled.div`
  display: inline-flex;
  margin-right: 2px;
  padding-right: 3px;
  border-right: 1px dashed #afafaf;

  input {
    display: none;
  }

  label {
    display: flex;
    padding: 5px 7px;
    color: #7c7c7c;
    border-radius: 27px;
    width: 34px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
      background-color: #e8e8e8;
    }

    &:active {
      background-color: #dbdbdb;
    }
  }
`

export const TextInputWrapper = styled.div`
  width: 100%;
  padding-left: 13px;

  input {
    width: 100%;
    font-size: 23px;
    font-weight: 300;
    border: 0px;
    background-color: transparent;
    outline: 0px;
  }
`

export const SubcategoriesWrapper = styled.div`
  width: ${inputFieldWith}px;
  display: block;
  padding-left: 40px;
  /* max-width: 390px; */
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% + 1.5rem);
    position: absolute;
    left: 0px;
    top: -1.5rem;
    border-width: 0px 0px 2px 2px;
    border-style: dashed;
    border-color: #dcdcdc;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }
`

export const CategoryInputFieldHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px 4px 0px;
  top: -19px;
`

export const CategoryInputFieldBody = styled.div`
  width: ${inputFieldWith}px;
  /* max-width: 390px; */
  position: relative;
  display: block;
`

export const CategoryInputActionsListWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-left: 10px;

      button {
        background-color: transparent;
        border: 0px;
        outline: 0px;
        font-size: 12px;
        display: flex;
        align-items: center;

        i {
          display: inline-flex;
          margin-right: 4px;
        }
      }
    }
  }
`

export const CategoryInputFieldFooter = styled.div`
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  bottom: -20px;
  left: 5px;

  span {
    font-size: 9px;
    color: #909090;
  }
`

export const OptionsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding: 30px 0px 0px;

  button {
    background-color: transparent;
    border: 0px;
    outline: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    i {
      display: inline-flex;
      margin-right: 5px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
