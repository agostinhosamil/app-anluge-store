import styled from 'styled-components'

export const cardAvatarSizesMap = {
  small: 30,
  normal: 65,
  large: 85,
  'x-large': 120,
  'xx-large': 160
}

type CardAvatarSizesMap = typeof cardAvatarSizesMap

type AvatarWrapperProps = {
  $avatarSize?: CardAvatarSize
}

export type CardAvatarSize = keyof CardAvatarSizesMap

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 14px;
  -webkit-border-radius: 14px;
  margin-bottom: 8px;
  padding: 25px;
`

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${props =>
    props.$avatarSize
      ? cardAvatarSizesMap[props.$avatarSize]
      : cardAvatarSizesMap.normal}px;
  height: ${props =>
    props.$avatarSize
      ? cardAvatarSizesMap[props.$avatarSize]
      : cardAvatarSizesMap.normal}px;

  div {
    width: inherit;
    height: inherit;

    img {
      border-radius: 50%;
      -webkit-border-radius: 50%;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  margin-top: +3px;
`

export const Title = styled.strong`
  font-weight: 500;
  font-size: 24px;
  display: block;
  margin-top: -9px;
`

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;
`

export const IconsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
  white-space: nowrap;
  justify-content: flex-end;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;

    li {
      display: inline-flex;
      margin-left: 8px;

      button {
        cursor: pointer;
        outline: 0px;
        border: 0px;
        background-color: transparent;
        padding: 5px 12px 8px;
        border-radius: 50%;
        transition: all 0.234s ease-in-out;

        i {
          display: block;
          font-size: 25px;
        }
      }
    }
  }
`
