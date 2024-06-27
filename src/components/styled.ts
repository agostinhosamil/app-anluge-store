import styled, { css, keyframes } from 'styled-components'

const placeHolderShimmer = keyframes`
  0%{
    background-position: -450px 0
  }

  100%{
      background-position: 450px 0
  }
`

export const animatedBackground = css`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background-color: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f5f4f3 8%,
    #ebebeb 18%,
    #f5f4f3 33%
  );
  background-size: 1200px 104px;
  position: relative;
`

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

export const PlaceHolder = styled.div`
  ${animatedBackground}
`
