'use client'

import { useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import { noEmpty } from '~/utils'

type MarqueeComponent = React.FunctionComponent<
  React.PropsWithChildren & React.ComponentProps<'div'>
>

export const Marquee: MarqueeComponent = props => {
  const runningState = useRef<boolean>(true)
  // const divRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const getElementX = (element: HTMLElement): number => {
    // if (!(containerRef.current && containerRef.current.children.length >= 1)) {
    //   return 0
    // }

    const re = /translateX\(([0-9-]+)px\)/i
    // const containerElementFirstChild =
    // .children[0] as HTMLElement
    const elementTranslateX = element.style.transform
    const elementTranslateXReMatch = re.exec(String(elementTranslateX))

    if (!elementTranslateXReMatch) {
      return 0
    }

    return parseFloat(elementTranslateXReMatch[1])
  }

  const divMouseEnterHandler = () => {
    runningState.current = false
  }

  const divMouseLeaveHandler = () => {
    runningState.current = true
  }

  const moveMarquee = (velocity: number): void => {
    if (!containerRef.current) {
      return
    }

    const containerElement = containerRef.current

    Array.from(containerElement.children).forEach(divElement => {
      const divElementCoords = divElement.getBoundingClientRect()
      const containerElementCoords = containerElement.getBoundingClientRect()

      if (divElementCoords.right <= containerElementCoords.right) {
        if (containerElement.children.length <= 1) {
          duplicateDivElement()
        }

        console.log(
          '>>> End Reached >>> run duplicateDivElement: #',
          containerElement.children.length,
          ' \n@'
          // getElementX()
        )

        // if (cloneElement) {
        //   const currentSliceX = getElementX()

        //   cloneElement
        // }
      }

      if (divElementCoords.right <= containerElementCoords.left) {
        try {
          // const divElementWidth = (divElement as HTMLElement).offsetWidth
          containerElement.removeChild(divElement)
          // console.log('>>> removed divElement')

          Array.from(containerElement.children).forEach(
            containerElementChild => {
              if (!(containerElementChild instanceof HTMLElement)) {
                return
              }

              // const containerElementChildX = getElementX(containerElementChild)
              // const updateContainerElementChildX =
              //   containerElementChildX - divElementWidth

              containerElementChild.style.transform = `translateX(0px)`
            }
          )
        } catch (err) {}
      }
    })

    const containerChildren = Array.from(containerElement.children)

    containerChildren.forEach(containerChild => {
      if (containerChild instanceof HTMLElement) {
        const elementX = getElementX(containerChild)
        containerChild.style.transform = `translateX(${elementX - velocity}px)`
      }
    })
  }

  const duplicateDivElement = (): HTMLElement | undefined => {
    if (!(containerRef.current && containerRef.current.children.length >= 1)) {
      return
    }

    const containerElementFirstChild =
      containerRef.current.children[-1 + containerRef.current.children.length]

    if (containerElementFirstChild instanceof HTMLElement) {
      const cloneElement = containerElementFirstChild.cloneNode(true)

      // if (cloneElement instanceof HTMLElement) {
      //   cloneElement.style.transform = `translateX(0px);`
      // }

      containerRef.current.appendChild(cloneElement)

      return cloneElement as HTMLElement
    }

    // Array.from(divElement.childNodes)
    //   .map(child => child.cloneNode(true))
    //   .forEach(child => {
    //     divElement.appendChild(child)
    //   })
  }

  const rightButtonClickHandler = () => {
    moveMarquee(700)
  }

  const leftButtonClickHandler = () => {
    moveMarquee(-700)
  }

  useEffect(() => {
    const effectHandlerTimeout = window.setInterval(() => {
      if (runningState.current) {
        moveMarquee(2)
      }
    }, 100)

    return () => {
      window.clearInterval(effectHandlerTimeout)
    }
  }, [])

  const defaultClassName = 'transition-transform block w-max'

  props.className = defaultClassName.concat(
    noEmpty(props.className)
      ? ` ${props.className.replace(defaultClassName, '')}`
      : ''
  )

  return (
    <div className="w-full relative block h-auto">
      <div
        ref={containerRef}
        className="w-full h-max flex flex-row flex-nowrap relative px-[20px] overflow-x-clip overflow-y-visible whitespace-nowrap"
      >
        <div
          {...props}
          // ref={divRef}
          suppressHydrationWarning
          onMouseEnter={divMouseEnterHandler}
          onMouseLeave={divMouseLeaveHandler}
        />
      </div>
      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <button
          type="button"
          onClick={leftButtonClickHandler}
          className="border-solid font-extrabold text-lg outline-none border-zinc-400 border-[1px] bg-zinc-200 py-3 px-2 rounded-full hover:bg-zinc-300 active:scale-90"
        >
          <FaAngleLeft className="pointer-events-none select-none" />
        </button>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <button
          type="button"
          onClick={rightButtonClickHandler}
          className="border-solid font-extrabold text-lg outline-none border-zinc-400 border-[1px] bg-zinc-200 py-3 px-2 rounded-full hover:bg-zinc-300 active:scale-90"
        >
          <FaAngleRight className="pointer-events-none select-none" />
        </button>
      </div>
    </div>
  )
}
