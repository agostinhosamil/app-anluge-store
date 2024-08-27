import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const UserCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  -webkit-border-radius: 12px;
  padding: 15px;
  box-shadow: 0px 0px 20px 1px rgb(0 0 0 / 13%);
`

export const PhotoWrapper = styled.div`
  width: 55px;
  height: 55px;

  div {
    width: inherit;
    height: inherit;

    img {
      border-radius: 50%;
      -webkit-border-radius: 50%;
    }
  }
`

export const DataWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  display: inline-flex;
  flex-direction: column;

  strong {
    display: block;
    padding-bottom: 6px;
  }

  span {
    font-size: 11px;
    text-transform: uppercase;
  }
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 20px 0px;
`
