import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FixedContainer = styled(Container)`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #ffffff;
  box-shadow: 0px 6px 15px 11px rgb(0 0 0 / 24%);
  padding: 11px 30px 15px;
  z-index: 10;
`

export const HeaderShadowElement = styled.div`
  width: 100%;
  height: 150px;
`

export const LogoWrapper = styled.div`
  width: 100%;
  max-width: 120px;

  div {
    width: 100%;
    color: #0160bf;

    img,
    svg {
      width: 100%;
    }

    h3 {
      display: inline-flex;
      padding: 0px 12px;
      color: inherit;
      font-size: 32px;
    }
  }
`

export const MenuContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`

export const SearchBoxContainer = styled.div`
  width: 100%;
  max-width: 360px;

  div {
    width: 100%;
    background-color: #ffffff;
    border-radius: 40px;
    -webkit-border-radius: 40px;
    border: 1px solid #dcdcdc;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 9px;

    input {
      width: 100%;
      border: 0px;
      outline: 0px;
      background-color: transparent;
      font-size: 18px;
      padding-left: 9px;
      font-weight: 300;
      font-size: 16px;
      margin-top: -3px;
    }

    i {
      display: block;
      padding: 0px 7px;
      font-size: 12px;
    }
  }
`

export const MenuListWrapper = styled.div`
  display: block;

  ul {
    width: 100%;
    list-style: none;

    li {
      display: inline-flex;
      align-items: center;
      margin: 0px 0px 0px 18px;
      font-size: 32px;
      color: #101213;
      cursor: pointer;

      * {
        color: inherit;
        font-size: 19px;
      }
    }
  }
`
