import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  background-color: #ffffff;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  box-shadow: 0px 16px 8px 2px rgb(0 0 0 / 27%);
  position: absolute;
  top: 100%;
  right: 20px;
  padding: 20px 0px;
  z-index: 8;
  border: 0px;
  outline: 0px;

  @media (max-width: 660px) {
    right: 0px;
    left: 0px;
    width: 100%;
    max-width: unset;
  }

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    li {
      width: 100%;
      margin: 2px 0px;
      padding: 0px;
      display: inline-flex;
      flex-direction: row;
      justify-content: flex-start;

      a {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 7px 20px 8px;
        color: #333333;

        &:hover {
          background-color: #ebebeb;
        }

        &:active {
          background-color: #e0e0e0;
        }

        i {
          font-size: 16px;
          display: inline-flex;
          margin-right: 8px;
        }

        span {
          display: inline-flex !important;
          width: 100%;
        }

        b {
          display: inline-flex;
          background-color: #095cd0;
          padding: 3px 8px;
          border-radius: 6px;
          color: #ffffff;
          width: unset;
          height: unset;
          font-size: 10px;
          margin: unset;
        }
      }

      b {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #ebebeb;
        margin: 8px 0px;
      }
    }
  }
`
