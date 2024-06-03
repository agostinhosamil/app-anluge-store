import styled from 'styled-components'

export const Container = styled.label`
  width: 100%;
  border-radius: 0.375rem;
  display: block;
  -webkit-border-radius: 0.375rem;
  padding: 18px 12px;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #dee2e6;
  margin-bottom: 1rem;
  cursor: text;
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: block;
  padding-bottom: 22px;
`

export const Label = styled.h5`
  font-weight: 600;
  color: #111111;
  font-size: 19px;
`

export const Body = styled.div`
  width: 100%;
  display: block;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      display: inline-flex;
      margin: 0px 8px 8px 0px;

      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 15px 8px 17px;
        background-color: #ebebeb;
        color: #525252;
        border-radius: 40px;
        -webkit-border-radius: 40px;
        font-size: 14px;
        user-select: none;
        -webkit-user-select: none;

        button {
          background-color: #c4c1c1;
          border: 0px;
          outline: 0px;
          padding: 2px 6px 3px;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          font-size: 10px;
          margin-left: 8px;

          &:hover {
            background-color: #a5a4a4;
          }

          &:active {
            background-color: #878787;
          }
        }

        input {
          border: 0px;
          outline: 0px;
          background-color: transparent;
          width: max-content;
        }
      }
    }
  }
`

export const TagInput = styled.input`
  margin-left: 12px;
  outline: 0px;
  background-color: transparent;
  border: 0px;
  font-size: 23px;
  font-weight: 300;
`
