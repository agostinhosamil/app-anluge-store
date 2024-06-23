import Link from 'next/link'
import styled, { css } from 'styled-components'

export type HeaderProps = {
  $colorStyle?: 'light' | 'default'
}

export type HeaderMenuProps = {
  $size?: 'large' | 'default' | undefined
}

export const Container = styled.div<HeaderProps>`
  width: 100%;
  background-color: ${props =>
    props.$colorStyle === 'default' ? '#0170bf' : '#ffffff'};
  color: ${props => (props.$colorStyle === 'default' ? '#ffffff' : '#333333')};
  position: relative;
  padding: 12px 40px;
  transition: all 0.3s ease-in-out;

  * {
    color: inherit;
    transition: inherit;
  }

  @media (max-width: 750px) {
    padding: 0px;
  }
`

export const HeaderMenu = styled.div<HeaderMenuProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: ${props => (props.$size === 'large' ? '15px 5px' : '15px 80px')};

  div.header-logo-container {
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;

      div.header-logo-wrapper {
        width: 45px;
        height: 45px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 15px;

        img {
          width: auto;
          height: auto;
        }
      }
    }

    @media (max-width: 850px) {
      h3 {
        display: none;
      }

      div.header-logo-wrapper {
        margin: 0px;
      }
    }
  }

  div.header-search-box-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    padding: ${props => (props.$size === 'large' ? '15px 5px' : '15px 30px')};
  }
`

export const HeaderMenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const HeaderMenuListItem = styled.li`
  margin: 0px 7px;
`

const headerMenuListItemStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0px;
  background-color: transparent;
  outline: 0px;
  position: relative;
`

export const HeaderMenuListButton = styled.button`
  ${headerMenuListItemStyles}
`

export const HeaderMenuListLink = styled(Link)`
  ${headerMenuListItemStyles}
`

export const HeaderMenuListItemIconWrapper = styled.i`
  margin-right: 6px;
  font-size: 18px;

  @media (max-width: 750px) {
    font-size: 19px;
  }

  @media (max-width: 560px) {
    font-size: 16px;
  }
`

export const HeaderMenuListItemLabel = styled.span`
  font-size: 11px;
  display: inline-flex;
  margin-top: 4px;

  @media (max-width: 750px) {
    display: none;
  }
`

export const HeaderMenuListItemBadge = styled.strong`
  position: absolute;
  background-color: #0150bf;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  padding: 5px 6px 4px;
  font-size: 7px;
  color: #ffffff;
  top: -6px;
  right: -6px;

  @media (max-width: 750px) {
    font-size: 4px;
  }

  @media (max-width: 560px) {
    font-size: 3px;
  }
`
