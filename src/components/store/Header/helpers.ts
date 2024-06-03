import {
  Coordinates,
  DropDownMenuContainerProps,
  GetDropDownMenuContainerPropsHelper
} from './types'

export const containerElementBreaksPage = (
  props: DropDownMenuContainerProps
): boolean => {
  const containerElementWidth = 360

  const x = props.$coordinates.listItem.x

  return Boolean(x + containerElementWidth >= window.innerWidth - 40)
}

export const resolveContainerElementX = (
  props: DropDownMenuContainerProps
): number => {
  const containerElementWidth = 360

  const x = props.$coordinates.listItem.x

  if (containerElementBreaksPage(props)) {
    const xMinusContainerElementWidth = x - containerElementWidth * 0.8

    if (xMinusContainerElementWidth <= 0) {
      return 0
    }

    return xMinusContainerElementWidth
  }

  if (window.innerWidth <= containerElementWidth) {
    return 0
  }

  return x
}

export const getDropDownMenuContainerProps: GetDropDownMenuContainerPropsHelper =
  ({ coordinates }) => {
    const dropDownContainerProps: DropDownMenuContainerProps = {
      $orientation: 'vertical',
      $coordinates: coordinates,
      $position: 'center'
    }

    if (coordinates.listItem.yh <= window.innerHeight * 0.4) {
      dropDownContainerProps.$position = 'bottom'
      dropDownContainerProps.$height =
        window.innerHeight - (coordinates.listItem.yh + 35)
    } else if (coordinates.listItem.y >= window.innerHeight * 0.6) {
      dropDownContainerProps.$height = coordinates.listItem.y - (15 + 20)
      dropDownContainerProps.$position = 'top'
    }

    return dropDownContainerProps
  }

export const getHorizontalDropDownMenuContainerProps: GetDropDownMenuContainerPropsHelper =
  ({ coordinates }) => {
    const dropDownContainerProps: DropDownMenuContainerProps = {
      $orientation: 'horizontal',
      $coordinates: coordinates,
      $position: 'center'
    }

    // if (coordinates.listItem.yh <= window.innerHeight * 0.4) {
    //   dropDownContainerProps.$position = 'bottom'
    //   dropDownContainerProps.$height =
    //     window.innerHeight - (coordinates.listItem.yh + 35)
    // } else if (coordinates.listItem.y >= window.innerHeight * 0.6) {
    //   dropDownContainerProps.$height = coordinates.listItem.y - (15 + 20)
    //   dropDownContainerProps.$position = 'top'
    // }

    return dropDownContainerProps
  }

export const coordinatesFactory = (): Coordinates => ({
  mouse: {
    x: 0,
    y: 0,
    xw: 0,
    yh: 0
  },
  listItem: {
    x: 0,
    y: 0,
    xw: 0,
    yh: 0
  }
})

export const getMouseCoordinates = (
  event: React.MouseEvent
): Coordinates['mouse'] => {
  const targetElement = event.target as HTMLElement

  if (!(targetElement.parentNode instanceof HTMLElement)) {
    throw new Error('not an element')
  }

  return {
    x: event.clientX,
    y: event.clientY,
    xw: event.clientX + targetElement.parentNode.offsetWidth,
    yh: event.clientY + targetElement.parentNode.offsetHeight
  }
}

export const getElementCoordinates = (
  element: HTMLElement
): Coordinates['listItem'] => {
  const elementCoordinates = element.getBoundingClientRect()

  return {
    x: elementCoordinates.x,
    y: elementCoordinates.y,
    xw: elementCoordinates.x + elementCoordinates.width,
    yh: elementCoordinates.y + elementCoordinates.height
  }
}

export const getElementAndMouseCoordinates = (
  event: React.MouseEvent,
  element: HTMLElement
): Coordinates => ({
  mouse: getMouseCoordinates(event),
  listItem: getElementCoordinates(element)
})
