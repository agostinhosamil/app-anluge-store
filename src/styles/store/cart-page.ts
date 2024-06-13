import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 50px 50px 0px;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 35px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-color: #ebebeb;

  h1 {
    display: block;
    font-size: 22px;
    font-weight: 500;
    color: #404040;
  }

  ol {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;

    * {
      user-select: none;
      -webkit-user-select: none;
    }

    li {
      display: inline-flex;
      padding: 0px 21px 0px 0px;

      button {
        font-size: 13px;
        background-color: transparent;
        border: 0px;
        outline: 0px;
        font-weight: 400;
        color: #0160bf;
        display: flex;

        i {
          display: inline-flex;
          margin-right: 8px;
        }

        span {
          display: inline-flex;
          margin-top: -3px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 35px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-color: #ebebeb;
  margin-top: 20px;
`

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 0px 0px;
`

export const SubmitButton = styled.button`
  width: 100%;
  border: 0px;
  padding: 13px 20px;
  border-radius: 35px;
  background-color: #0160bf;
  color: #ffffff;
`
