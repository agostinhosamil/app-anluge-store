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
  border-radius: 8px;
  -webkit-border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;

  * {
    text-align: center;
    color: inherit;
    user-select: none;
    -webkit-user-select: none;
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
  border-radius: 8px;
  -webkit-border-radius: 8px;
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
          border: 0px;
          outline: 0px;
          color: #515151;
          padding: 6px 12px 9px;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          transition: transform 0.2s ease-in-out;

          &:active {
            transform: scale(0.9783);
          }
        }
      }
    }
  }
`
