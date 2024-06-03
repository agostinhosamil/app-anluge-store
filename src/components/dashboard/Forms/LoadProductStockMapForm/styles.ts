import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: auto;
  display: block;
  padding: 10px 0px;
`

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  padding: 0px;
`

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #ffffff;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9785;

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
