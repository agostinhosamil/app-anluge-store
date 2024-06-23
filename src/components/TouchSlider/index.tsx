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
  // const [grabbing, setGrabbing] = useState<boolean>(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // const mouseHoldingWrapperState = useRef<boolean>(false)
  const grabbingState = useRef<boolean>(false)
  const mouseXValuesState = useRef<MouseXValues>({
    old: -1,
    current: -1
  })

  const isLastSlideActive = () => {
    const sliderWrapperElement = wrapperRef.current

    if (!sliderWrapperElement) {
      return false
    }

    console.log(
      `>>> index >= sliderWrapperElement.children.length: ${index} >= ${sliderWrapperElement.children.length}`
    )

    return index >= sliderWrapperElement.children.length
  }

  const resolveMouseDirection = (): MouseDirection | null => {
    const { current, old } = mouseXValuesState.current

    if (current === old) {
      return null
    }

    return current >= old ? MouseDirection.RIGHT : MouseDirection.LEFT
  }

  const resolveSliderVelocity = (): number => {
    const sliderWrapperElement = wrapperRef.current

    if (!sliderWrapperElement) {
      return 200
    }

    // const currentElementIndex = sliderWrapperElement.children.length / sliderX
    // const nextElementIndex =
    //   sliderDirection === MouseDirection.LEFT
    //     ? currentElementIndex - 1
    //     : currentElementIndex + 1

    // // console.log('>>> nextElementIndex: ', nextElementIndex)

    // return 320

    // console.log(
    //   '>>> slider velocity: ',
    //   sliderWrapperElement.offsetWidth / sliderWrapperElement.children.length
    // )

    const sliderWrapperElementFirstChild = sliderWrapperElement
      .children[0] as HTMLElement

    return sliderWrapperElementFirstChild
      ? sliderWrapperElementFirstChild.offsetWidth + 20
      : sliderWrapperElement.offsetWidth / sliderWrapperElement.children.length
  }

  const sliderWrapperMouseDownHandler: React.MouseEventHandler = event => {
    // console.log('>>> sliderWrapperMouseDownHandler')
    // setTimeout(() => {
    grabbingState.current = true

    mouseXValuesState.current = {
      ...mouseXValuesState.current,
      old: event.clientX
    }
    // }, 100)
  }

  const sliderWrapperMouseUpHandler: React.MouseEventHandler = event => {
    grabbingState.current = false

    mouseXValuesState.current = {
      ...mouseXValuesState.current,
      current: event.clientX
    }

    const direction = resolveMouseDirection()

    if (!direction) {
      return
    }

    const velocity = resolveSliderVelocity()

    switch (direction) {
      case MouseDirection.LEFT:
        if (!isLastSlideActive()) {
          setSliderX(sliderX - velocity)

          setIndex(index + 1)
        }
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
    if (
      !(
        wrapperRef.current &&
        wrapperRef.current.children.length >= 1 &&
        containerRef.current
      )
    ) {
      return
    }

    // const containerElement = containerRef.current
    // const wrapperElementChildren = wrapperRef.current.children
    // const wrapperElementLastChild = wrapperElementChildren[-1 + wrapperElementChildren.length] as HTMLElement

    // const containerElementCoordinates = containerElement.getBoundingClientRect()
    // const wrapperElementLastChildCoordinates =
    //   wrapperElementLastChild.getBoundingClientRect()

    // ...

    // const wrapperElement = wrapperRef.current
    // const wrapperLastChild =
    //   wrapperRef.current.children[-1 + wrapperRef.current.children.length]
    // const wrapperElementCoordinates = getElementCoordinates(wrapperElement)
    // const containerElementCoordinates = getElementCoordinates(
    //   containerRef.current
    // )
    // const wrapperElementXRelativeToContainer =
    //   wrapperElementCoordinates.x - containerElementCoordinates.x
    // const wrapperElementXwRelativeToContainer =
    //   wrapperElementXRelativeToContainer + containerRef.current.offsetWidth
    // const x = containerElementCoordinates.x - wrapperElementCoordinates.x
    // const xw = x + containerRef.current.offsetWidth
    // console.log('>>> X: ', x)
    // const wrapperElementXw =
    //   wrapperElementCoordinates.xw - containerRef.current.offsetWidth
    // if (
    //   wrapperElementCoordinates.x - x + containerRef.current.offsetWidth <=
    //   containerElementCoordinates.xw
    // ) {
    //   console.log('>>> out of range')
    // }
    // console.log(
    //   '>>> wrapperElementXwRelativeToContainer: ',
    //   wrapperElementXwRelativeToContainer
    // )
    // if (wrapperElementXwRelativeToContainer < 0) {
    //   console.log('>>> Limit reached!!!')
    // }
    // if (wrapperLastChildCoordinates.xw < containerElementCoordinates.xw) {
    //   const wrapperToContainerXDiff =
    //     containerElementCoordinates.xw - wrapperLastChildCoordinates.xw
    //   console.log(`
    //     >>> wrapperLastChildCoordinates.xw < containerElementCoordinates.xw => ${wrapperLastChildCoordinates.xw} < ${containerElementCoordinates.xw}
    //     >>> wrapperToContainerXDiff: ${wrapperToContainerXDiff}
    //   `)
    //   setSliderX(sliderX + wrapperToContainerXDiff)
    // }
  }, [sliderX])

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
