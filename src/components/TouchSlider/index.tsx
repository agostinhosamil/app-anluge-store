import { Fragment, useEffect, useRef, useState } from 'react'

import { NavigationButton } from './NavigationButton'
import { Container, Root, Wrapper } from './styles'

export * from './Slide'

type MouseXValues = {
  old: number
  current: number
}

enum MouseDirection {
  LEFT = '@mouseDirection:LEFT',
  RIGHT = '@mouseDirection:RIGHT'
}

export type TouchSliderProps = {
  showButtons?: boolean
  showIndicators?: boolean
}

type TouchSliderComponent = React.FunctionComponent<
  React.PropsWithChildren & TouchSliderProps
>

export const TouchSlider: TouchSliderComponent = props => {
  const [index, setIndex] = useState<number>(0)
  const [sliderX, setSliderX] = useState<number>(0)

  const grabbingState = useRef<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseXValuesState = useRef<MouseXValues>({
    old: -1,
    current: -1
  })

  const wrapperElementGrabbingClassName = 'x-grabbing-wrapper-element'

  const resolveMouseDirection = (): MouseDirection | null => {
    const { current, old } = mouseXValuesState.current

    const MIN_SWIPE_SIZE = 70

    if (current > old && current - old >= MIN_SWIPE_SIZE) {
      return MouseDirection.RIGHT
    }

    if (current < old && old - current >= MIN_SWIPE_SIZE) {
      return MouseDirection.LEFT
    }

    return null
  }

  const resolveSliderVelocity = (): number => {
    const sliderWrapperElement = wrapperRef.current

    if (!sliderWrapperElement) {
      return 200
    }

    const sliderWrapperElementFirstChild = sliderWrapperElement
      .children[0] as HTMLElement

    return sliderWrapperElementFirstChild
      ? sliderWrapperElementFirstChild.offsetWidth + 20
      : sliderWrapperElement.offsetWidth / sliderWrapperElement.children.length
  }

  const toggleGrabWrapperElement = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.toggle(wrapperElementGrabbingClassName)
    }
  }

  const swipeLeft = (velocity: number): void => {
    if (
      !(
        wrapperRef.current &&
        wrapperRef.current.children.length >= 1 &&
        containerRef.current
      )
    ) {
      return
    }

    const wrapperElement = wrapperRef.current
    const containerElement = containerRef.current

    const wrapperElementCoordinates = wrapperElement.getBoundingClientRect()
    const containerElementCoordinates = containerElement.getBoundingClientRect()

    const wrapperElementXw =
      wrapperElementCoordinates.x - velocity + wrapperElementCoordinates.width
    const containerElementXw =
      containerElementCoordinates.x + containerElementCoordinates.width

    if (containerElementXw >= wrapperElementXw) {
      const containerElementXwDiffToWrapperIs =
        containerElementXw - wrapperElementXw

      velocity -= containerElementXwDiffToWrapperIs
    }

    setSliderX(sliderX - velocity)

    setIndex(index + 1)
  }

  const swipeRight = (velocity: number): void => {
    setSliderX(sliderX + velocity)

    if (index >= 1) {
      setIndex(index - 1)
    }
  }

  const sliderWrapperMouseDownHandler: React.MouseEventHandler = event => {
    toggleGrabWrapperElement()

    grabbingState.current = true

    mouseXValuesState.current = {
      ...mouseXValuesState.current,
      old: event.clientX
    }
  }

  const sliderWrapperMouseUpHandler: React.MouseEventHandler = event => {
    toggleGrabWrapperElement()

    grabbingState.current = false

    mouseXValuesState.current = {
      ...mouseXValuesState.current,
      current: event.clientX
    }

    const velocity = resolveSliderVelocity()
    const direction = resolveMouseDirection()

    if (!direction) {
      return
    }

    switch (direction) {
      case MouseDirection.LEFT:
        swipeLeft(velocity)
        break

      case MouseDirection.RIGHT:
        swipeRight(velocity)
        break
    }
  }

  const sliderWrapperMouseLeaveHandler: React.MouseEventHandler = event => {
    if (grabbingState.current) {
      sliderWrapperMouseUpHandler(event)
    }
  }

  const sliderWrapperMouseMoveHandler = () => {}

  const leftNavigationButtonClickHandler = () => {
    swipeRight(resolveSliderVelocity())
  }

  const rightNavigationButtonClickHandler = () => {
    swipeLeft(resolveSliderVelocity())
  }

  useEffect(() => {
    if (sliderX > 0) {
      setSliderX(0)
    }
  }, [sliderX])

  return (
    <Root>
      {typeof props.showButtons === 'boolean' && props.showButtons && (
        <Fragment>
          <NavigationButton
            icon="FaAngleLeft"
            onClick={leftNavigationButtonClickHandler}
          />
          <NavigationButton
            icon="FaAngleRight"
            onClick={rightNavigationButtonClickHandler}
          />
        </Fragment>
      )}
      <Container ref={containerRef}>
        <Wrapper
          ref={wrapperRef}
          $x={sliderX}
          onMouseDown={sliderWrapperMouseDownHandler}
          onMouseUp={sliderWrapperMouseUpHandler}
          onMouseMove={sliderWrapperMouseMoveHandler}
          onMouseLeave={sliderWrapperMouseLeaveHandler}
        >
          {props.children}
        </Wrapper>
      </Container>
    </Root>
  )
}
