import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  height: auto;
  display: block;

  a {
    width: 100%;
    display: block;
    position: relative;

    div {
      width: 100%;
      display: inherit;
      border-radius: 12px;
      -webkit-border-radius: 12px;
      background-color: #bfbfbf;

      img {
        width: 100%;
        object-fit: cover;
        -webkit-object-fit: cover;
        border-radius: inherit;
        -webkit-border-radius: inherit;
      }
    }

    &:hover div img {
      opacity: 0.9;
    }
  }
`
