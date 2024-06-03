import { css } from 'styled-components'

import { resolveContainerElementX } from './helpers'
import { DropDownMenuContainerProps } from './types'

export const HorizontalDropDownMenuContainerStylesByPositionMap = {
  left: css<DropDownMenuContainerProps>``,

  right: css<DropDownMenuContainerProps>``,

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
  `
}
