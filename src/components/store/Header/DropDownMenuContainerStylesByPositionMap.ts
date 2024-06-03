import { css } from 'styled-components'
import { resolveContainerElementX } from './helpers'
import { DropDownMenuContainerProps } from './types'

export const DropDownMenuContainerStylesByPositionMap = {
  center: css<DropDownMenuContainerProps>`
    height: max-content;
    max-height: calc(100vh - 40px);
    left: ${props => resolveContainerElementX(props)}px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    border-radius: 14px;
    -webkit-border-radius: 14px;

    & > div {
      height: max-content;
      max-height: calc(100vh - 100px);
    }
  `,

  top: css<DropDownMenuContainerProps>`
    height: ${props =>
      typeof props.$height === 'number' ? `${props.$height}px` : 'max-content'};
    left: ${props => resolveContainerElementX(props)}px;
    top: ${props =>
      props.$coordinates.listItem.y - (props.$height || 0) - 15}px;
  `,

  bottom: css<DropDownMenuContainerProps>`
    height: ${props =>
      typeof props.$height === 'number' ? `${props.$height}px` : 'max-content'};
    left: ${props => resolveContainerElementX(props)}px;
    top: ${props => props.$coordinates.listItem.yh + 13}px;
  `
}
