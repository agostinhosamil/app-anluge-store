import styled from 'styled-components'

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(255 255 255 / 87%);
  border-radius: 12px;
  -webkit-border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9385;
  z-index: 3;
  cursor: not-allowed;

  * {
    user-select: none;
    -webkit-user-select: none;
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    color: #444444;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  height: auto;
  margin: auto;
  display: block;
  position: relative;
`

export const UnderConstructionFallbackContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px;

  svg {
    width: 100%;
    max-width: 750px;
  }

  h1 {
    display: block;
    margin-top: 80px;
    color: #0b40bf;
    font-weight: 300;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 920px) {
    padding: 30px;
  }
`
