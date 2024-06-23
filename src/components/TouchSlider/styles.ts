import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`

const wrapperStylesWhenGrabbing = css`
  cursor: grab;

  * {
    cursor: inherit;
    pointer-events: none;
  }
`

type WrapperProps = {
  $x: number
  $grabbing?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  width: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  white-space: nowrap;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.$x}px);
  ${props => (props.$grabbing ? wrapperStylesWhenGrabbing : null)};

  * {
    user-select: none;
    -webkit-user-select: none;
  }
`
