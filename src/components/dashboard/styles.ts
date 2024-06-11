import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 100px 100px 0px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1500px) {
    padding: 50px 50px 0px;
  }
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 60px 0px 0px;
  flex-direction: row;
`

export const Content = styled.div`
  width: 100%;
`
export const AsideWrapper = styled.div`
  width: 100%;
  max-width: 310px;
  padding-right: 25px;
`

export const Main = styled.main`
  width: 100%;
  height: auto;
  display: block;
  padding: 40px 0px;
`

export const EmptyListContainer = styled.div`
  width: 100%;
  padding: 140px 60px;

  * {
    user-select: none;
    -webkit-user-select: none;
  }

  h1 {
    font-weight: 900;
    font-size: 68px;
    color: #dadada;
    display: block;
    padding: 0px 30px 25px;
    width: 100%;
    text-transform: uppercase;
    line-height: 60px;
    text-align: center;
  }

  h2 {
    font-weight: 300;
    font-size: 33px;
    color: #e0e0e0;
    text-align: center;
    line-height: 31px;
    text-transform: uppercase;
  }

  ul {
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      display: inline-flex;
      margin: 0px 8px;

      button {
        background-color: transparent;
        color: #333333;
        font-weight: 600;
        font-size: 15px;
        border: 0px;
        outline: 0px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
