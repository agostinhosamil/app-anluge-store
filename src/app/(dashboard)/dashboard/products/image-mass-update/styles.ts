import styled from 'styled-components'

export const SubTitle = styled.h3`
  width: 100%;
  display: block;
  padding: 25px 0px;
  font-weight: 600;
  color: #888888;
`

export const HidePreviewListButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 25px;

  button {
    background-color: transparent;
    border: 0px;
    outline: 0px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LoadImagesForm = styled.form`
  width: 100%;
  height: auto;
  display: block;
`

export const LoadImagesFormDropZoneWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 12px 0px;
`

export const LoadImagesFormTitle = styled.strong`
  font-weight: 600;
  color: #6a6868;
`

export const LoadImagesFormMessage = styled.p`
  display: block;
  font-weight: 400;
  color: #b3b3b3;
  font-size: 13px;
  padding: 15px 0px;
`
