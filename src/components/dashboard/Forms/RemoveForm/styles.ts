import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
  position: relative;
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding-bottom: 15px;

  h5 {
    font-weight: 700;
    font-size: 16px;
    display: block;
    width: 100%;
    padding-bottom: 10px;
  }

  p {
    display: block;
    margin: 0px;
    padding: 0px 0px 8px;
    font-weight: 300;

    b {
      font-weight: 600;
    }
  }
`
