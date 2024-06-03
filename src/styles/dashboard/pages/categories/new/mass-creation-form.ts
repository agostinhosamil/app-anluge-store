import styled from 'styled-components'

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: block;
  padding-top: 20px;
`

export const UseFullLinksListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 10px 0px 40px;

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-left: 9px;
      padding-left: 9px;
      border-left: 1px solid #e0e0e0;

      &:nth-child(1) {
        border-left: unset;
      }

      button {
        background-color: transparent;
        border: 0px;
        outline: 0px;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        flex-direction: row;

        i {
          display: inline-flex;
          margin: 8px;
        }

        &:hover {
          text-decoration: underline;
        }

        &:disabled {
          cursor: not-allowed;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
`
