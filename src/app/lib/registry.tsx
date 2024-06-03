'use client'

// import function to register Swiper custom elements
import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

type StyledComponentsRegistryProps = {
  children: React.ReactNode
}

export default function StyledComponentsRegistry({
  children
}: StyledComponentsRegistryProps) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()

    styledComponentsStyleSheet.instance.clearTag()

    return <React.Fragment>{styles}</React.Fragment>
  })

  if (typeof window !== 'undefined') {
    return <React.Fragment>{children}</React.Fragment>
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
