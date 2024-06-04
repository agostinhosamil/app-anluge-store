import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0px 0px 130px;

  @media (min-width: 600px) {
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      width: 100%;
      height: 65vh;
      background-color: #0170bf;
      z-index: -1;
    }
  }
`

export const Header = styled.header`
  width: 100%;
  background-color: #0170bf;
  color: #ffffff;
  padding: 12px 0px;

  * {
    color: inherit;
  }
`

export const HeaderMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 35px 80px 15px;

  div.header-logo-container {
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    div.header-logo-wrapper {
      width: 45px;
      height: 45px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 15px;

      img {
        width: auto;
        height: auto;
      }
    }
  }

  div.header-search-box-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    li {
      margin: 0px 7px;

      a {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        i {
          margin-right: 12px;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 35px 30px;
  }
`
export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`

export const ContentBody = styled.div`
  width: 100%;
  max-width: 530px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow:
    0px 2px 15px -3px rgba(0, 0, 0, 0.15),
    0px 4px 6px -4px rgba(0, 0, 0, 0.1);
  padding: 35px;
  border-radius: 12px;
  -webkit-border-radius: 12px;

  @media (max-width: 650px) {
    box-shadow: none;
  }
`
