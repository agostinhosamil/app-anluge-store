import { useEffect, useRef } from 'react'

type SlideProps = {
  width?: ''
}

type SlideComponent = React.FunctionComponent<
  React.PropsWithChildren & SlideProps
>

export const Slide: SlideComponent = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const linksMouseStartHandler = (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()
    }

    if (containerRef.current) {
      const anchorElements = Array.from(
        containerRef.current.querySelectorAll('a')
      )

      for (const anchorElement of anchorElements) {
        anchorElement.ondragstart = linksMouseStartHandler
      }
    }
  })

  return <div ref={containerRef}>{children}</div>
}
