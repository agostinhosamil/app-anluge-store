import styled from 'styled-components'

export const TopHeaderContainer = styled.div`
  width: 100%;
  padding: 25px 25px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  & > div.container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const TopHeaderMenu = styled.div`
  width: 100%;
  display: block;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      padding: 0px 25px;
      border-left: 2px solid #cecece;

      a {
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 400;

        &:hover {
          text-decoration: underline;
        }

        @media (min-width: 801px) and (max-width: 1000px) {
          font-size: 7px;
        }

        @media (max-width: 450px) {
          font-size: 7px;
        }
      }

      &.selected a {
        border-radius: 16px;
        -webkit-border-radius: 37px;
        padding: 9px 14px;
        font-weight: 700;

        &:hover {
          text-decoration: unset;
        }
      }

      @media (max-width: 1170px) {
        padding: 0px 8px;
      }
    }

    li:nth-child(1) {
      padding-left: 0px;
      border-left: unset;
    }

    @media (max-width: 1000px) {
      justify-content: center;
    }
  }
`

export const TopHeaderData = styled(TopHeaderMenu)`
  width: 100%;

  ul {
    justify-content: flex-end;

    li {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;

      i {
        display: block;
        margin: -5px 9px 0px 0px;
      }

      span {
        font-size: 9px;
        font-weight: 500;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }

    @media (max-width: 1000px) {
      justify-content: center;
      padding: 40px 0px 0px;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      li {
        margin-top: -34px;

        * {
          font-size: 9px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`
