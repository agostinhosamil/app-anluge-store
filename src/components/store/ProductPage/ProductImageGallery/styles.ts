import styled from 'styled-components'
import { animatedBackground } from '~/components/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

export const ThumbnailsListWrapper = styled.div`
  width: 60px;
  height: auto;
  margin-right: 20px;

  ul {
    width: inherit;
    padding: 40px 0px;
    margin-right: 20px;

    li {
      width: 60px;
      height: 60px;

      div {
        width: inherit;
        height: inherit;
        background-color: #dcdcdc;
        margin: 8px 0px;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        img {
          width: 100%;
          height: 100%;
          border-radius: inherit;
          -webkit-border-radius: inherit;
        }

        &:hover {
          transform: scale(1.2);

          img {
            opacity: 0.9;
          }
        }
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;

  &.loading {
    ${animatedBackground}
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    -webkit-border-radius: 8px;
  }
`
