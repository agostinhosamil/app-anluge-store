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
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`
