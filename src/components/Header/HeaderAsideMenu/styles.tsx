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

  @media (max-width: 430px) {
    right: 0px;
    left: 0px;
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
        display: block;
        padding: 7px 20px 8px;

        &:hover {
          background-color: #ebebeb;
        }

        &:active {
          background-color: #e0e0e0;
        }

        i {
          font-size: 16px;
        }

        span {
          display: inline-flex !important;
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
