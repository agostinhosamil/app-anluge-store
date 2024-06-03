import styled from 'styled-components'

type DropZoneElementProps = {
  $error?: boolean
}

type DropZoneFilePreviewProps = {
  $src: string
}

type DropZoneBodyProps = {
  $height?: number
}

export const DropZoneContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
`

export const DropZoneElement = styled.div<DropZoneElementProps>`
  width: 100%;
  background-color: ${props => (props.$error ? '#ffe6e6' : '#f8f8f8')};
  border-radius: 8px;
  -webkit-border-radius: 8px;
  border: 2px dashed ${props => (props.$error ? '#9d5959' : '#808080')};
  color: ${props => (props.$error ? '#9d5959' : '#808080')};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;

  * {
    text-align: center;
    color: inherit;
    user-select: none;
    -webkit-user-select: none;
  }

  &:hover {
    background-color: ${props => (props.$error ? '#ffbfbf' : '#ebebeb')};
  }

  &:active {
    background-color: ${props => (props.$error ? '#e8a9a9' : '#e0e0e0')};
  }

  i {
    display: block;
    font-size: 35px;
  }

  p {
    display: block;
    padding: 4px 0px 0px;
    margin: 0px;
    font-size: 11px;
    font-weight: 400;
  }
`

export const DropZoneBody = styled.div<DropZoneBodyProps>`
  width: 100%;
  height: auto;
  min-height: ${props =>
    typeof props.$height === 'number' ? props.$height : 220}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 20px;
  position: relative;
`

export const DropZoneFilePreview = styled.div<DropZoneFilePreviewProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  pointer-events: none;
  opacity: 0.7;
  cursor: none;
  background-image: url('${props => props.$src}');
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  background-attachment: scroll;
  background-position: center;
`

export const DropZoneFooter = styled.div`
  width: 100%;
  padding-top: 5px;
  display: block;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      display: inline-flex;
      margin: 7px 3px 0px;

      div {
        width: 100%;
        padding: 2px;

        button {
          background-color: #ebebeb;
          border: 0px;
          outline: 0px;
          color: #515151;
          padding: 6px 12px 9px;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          transition: transform 0.2s ease-in-out;

          &:hover {
            background-color: #dfdfdf;
          }

          &:active {
            background-color: #b1b1b1;
            transform: scale(0.9783);
          }
        }
      }
    }
  }
`
