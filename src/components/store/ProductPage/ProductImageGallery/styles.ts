import styled from 'styled-components'

import { animatedBackground, PlaceHolder } from '~/components/styled'

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
    max-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
    overflow-x: visible;
    overflow-y: clip;

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
        box-shadow: 0px 2px 5px 1px rgb(0 0 0 / 12%);

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
  box-shadow: 0px 0px 15px 10px rgb(0 0 0 / 10%);
  border-radius: 8px;
  -webkit-border-radius: 8px;
  position: relative;
  overflow: hidden;

  &.loading {
    ${animatedBackground}
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    transform: scale(1.35);
  }
`

export const ImagePlaceHolder = styled(PlaceHolder)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
`
