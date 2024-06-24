import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom: 4px solid #ffffff;

  data {
    width: 100%;
    height: auto;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h5 {
      display: flex;
      flex-direction: row;
      gap: 10px;

      i {
        display: block;
        margin-top: -3px;

        button {
          background-color: transparent;
          border: 0px;
          outline: 0px;
          color: #4c5156;

          &:hover {
            color: #656d74;
          }

          &:active {
            color: #393e44;
          }
        }
      }
    }

    strong {
      display: inline-block;
      padding: 4px 14px 2px;
      border-radius: 4px;
      background-color: #d4d4d4;
      color: #524e4e;
      font-size: 10px;
      margin-top: 15px;
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: #b9b8b8;
      }

      &:active {
        background-color: #9f9e9e;
        color: #ffffff;
      }
    }
  }

  ul {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    li {
      display: inline-flex;

      a,
      button {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        white-space: nowrap;
        background-color: #6c7b90;
        color: #ffffff;
        padding: 4px 12px;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        font-size: 12px;
        border: 0px;
        outline: 0px;

        &:hover {
          background-color: #576578;
        }

        &:active {
          background-color: #435062;
        }
      }
    }
  }
`

export const OrderItemContainer = styled.div`
  width: 280px;

  a {
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    border: 0px;
    position: relative;
    gap: 7px;

    div {
      width: 100%;
      height: 230px;
      background-color: #e0e0e0;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: scroll;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    strong {
      font-size: 14px;
      font-weight: 300;
      word-break: break-word;
      white-space: break-spaces;
      display: -webkit-box;
      width: 100%;
      padding: 15px 0px 9px;
      overflow-y: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      color: #444444;
      height: 100px;
    }

    span {
      display: inline-block;
      font-weight: 900;
      color: #b0b0b0;
      font-size: 21px;
    }
  }
`
