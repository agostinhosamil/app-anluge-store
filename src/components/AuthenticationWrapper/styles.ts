import Image from 'next/image'
import styled from 'styled-components'

export const LoginDialogUserDataContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 0px 10px;
  flex-direction: column;
`

export const LoginDialogUserData = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  flex-wrap: wrap;

  span {
    font-size: 12px;
    color: #bdbdbd;
    font-weight: 500;
  }

  h5 {
    color: #444444;
    font-weight: 900;
    display: inline-flex;
    padding: 5px 0px;
  }

  h6 {
    font-weight: 300;
    font-size: 14px;
  }
`

export const LoginDialogUserAvatarWrapper = styled.div`
  width: calc(100% + 36px);
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: rgb(185 186 190 / 17%);
  padding-top: 23px;
  margin-left: -18px;
`

export const LoginDialogUserAvatar = styled(Image)`
  border: 6px solid #ffffff;
  outline: 0px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  box-sizing: content-box;
  margin-bottom: -35px;
`
