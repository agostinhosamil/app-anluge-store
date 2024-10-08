import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding-top: 19px;
  padding: 30px 35px;

  &:nth-child(1) {
    border-top: 0px;
    margin-top: 0px;
  }
`

export const SelectedContainer = styled(Container)`
  background-color: red;
`

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border-radius: 50%;
  -webkit-border-radius: 50%;

  i {
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
    -webkit-border-radius: inherit;

    img {
      border-radius: inherit;
      -webkit-border-radius: inherit;
    }
  }
`

export const DataWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  position: relative;
`

export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;

  h6 {
    width: 100%;
    display: inline-flex;
    padding: 0px 20px 50px 0px;
    margin: 0px;
  }

  ul {
    display: inline-flex;
    flex-direction: row;

    li {
      display: inline-flex;
      margin-left: 15px;

      button {
        border: 0px;
        cursor: pointer;
        outline: 0px;
        background-color: transparent;

        i {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #909090;
        }

        &:hover i {
          color: #585757;
        }
      }
    }
  }
`

export const BudgetData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0px;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  margin-right: 20px;

  strong {
    font-size: 23px;
    font-weight: 500;
  }
`

export const AmountInputWrapper = styled.div`
  display: inline-flex;

  div {
    width: 100%;
    display: inline-flex;
    align-items: center;

    i {
      padding: 0px 7px;

      button {
        background-color: rgb(144 144 144 / 65%);
        border-radius: 50%;
        width: 20px;
        border: 0px;
        height: 20px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
      }
    }

    input {
      width: 62px;
      font-size: 14px;
      text-align: center;
      outline: 0px;
      border: 0px;
      border-radius: 5px;
      -webkit-border-radius: 5px;
      padding: 9px;
    }
  }
`
