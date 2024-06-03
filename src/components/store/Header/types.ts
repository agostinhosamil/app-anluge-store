import { DropDownMenuContainerStylesByPositionMap } from './DropDownMenuContainerStylesByPositionMap'
import { HorizontalDropDownMenuContainerStylesByPositionMap } from './HorizontalDropDownMenuContainerStylesByPositionMap'

export type CoordinatesProps = {
  y: number
  x: number
  /**
   * element y axis plus its height
   */
  yh: number
  /**
   * element x axis plus its width
   */
  xw: number
}

export type Coordinates = {
  listItem: CoordinatesProps
  mouse: CoordinatesProps
}

export type DropDownMenuContainerOrientation = 'horizontal' | 'vertical'

export type HorizontalDropDownMenuContainerProps = {
  $orientation: 'horizontal'
  $position?: keyof typeof HorizontalDropDownMenuContainerStylesByPositionMap
}

export type VerticalDropDownMenuContainerProps = {
  $orientation: 'vertical'
  $position?: keyof typeof DropDownMenuContainerStylesByPositionMap
}

export type DropDownMenuContainerProps = (
  | VerticalDropDownMenuContainerProps
  | HorizontalDropDownMenuContainerProps
) & {
  $height?: number
  $coordinates: Coordinates
}

export type GetDropDownMenuContainerPropsHelperProps = {
  coordinates: Coordinates
}

export type GetDropDownMenuContainerPropsHelper = (
  props: GetDropDownMenuContainerPropsHelperProps
) => DropDownMenuContainerProps
