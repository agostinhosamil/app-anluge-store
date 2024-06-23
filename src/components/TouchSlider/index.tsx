import { useEffect, useRef, useState } from 'react'

import { Container, Wrapper } from './styles'

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

  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const grabbingState = useRef<boolean>(false)
  const mouseXValuesState = useRef<MouseXValues>({
    old: -1,
    current: -1
  })

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

  const sliderWrapperMouseDownHandler: React.MouseEventHandler = event => {
    grabbingState.current = true

    mouseXValuesState.current = {
      ...mouseXValuesState.current,
      old: event.clientX
    }
  }

  const sliderWrapperMouseUpHandler: React.MouseEventHandler = event => {
    grabbingState.current = false

    mouseXValuesState.current = {
      ...mouseXValuesState.current,
      current: event.clientX
    }

    let velocity = resolveSliderVelocity()
    const direction = resolveMouseDirection()

    if (!direction) {
      return
    }

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

    switch (direction) {
      case MouseDirection.LEFT:
        if (containerElementXw >= wrapperElementXw) {
          const containerElementXwDiffToWrapperIs =
            containerElementXw - wrapperElementXw

          velocity -= containerElementXwDiffToWrapperIs
        }

        setSliderX(sliderX - velocity)

        setIndex(index + 1)
        break

      case MouseDirection.RIGHT:
        setSliderX(sliderX + velocity)

        if (index >= 1) {
          setIndex(index - 1)
        }
        break
    }
  }

  const sliderWrapperMouseLeaveHandler: React.MouseEventHandler = event => {
    if (grabbingState.current) {
      sliderWrapperMouseUpHandler(event)
    }
  }

  const sliderWrapperMouseMoveHandler = () => {}

  useEffect(() => {
    if (sliderX > 0) {
      setSliderX(0)
    }
  }, [sliderX])

  return (
    <Container ref={containerRef}>
      <Wrapper
        ref={wrapperRef}
        $x={sliderX}
        $grabbing={grabbingState.current}
        onMouseDown={sliderWrapperMouseDownHandler}
        onMouseUp={sliderWrapperMouseUpHandler}
        onMouseMove={sliderWrapperMouseMoveHandler}
        onMouseLeave={sliderWrapperMouseLeaveHandler}
      >
        {props.children}
      </Wrapper>
    </Container>
  )
}
