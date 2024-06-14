import { css } from 'styled-components'

export const simpleScrollBarStyles = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-button {
    width: 2px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #9e9e9e;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }

  &::-webkit-scrollbar-track:active {
    background: #ffffff;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`
