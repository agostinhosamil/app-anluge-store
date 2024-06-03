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
`

export const Body = styled.div``

export const ListWrapper = styled.div``

export const List = styled.ul``

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  padding: 40px 0px 0px;

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
  input {
    display: none;
  }

  label {
    display: block;
    padding: 5px 12px 5px 7px;
    color: #afafaf;
    border-right: 1px dashed #afafaf;
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
