'use client'

import { useEffect, useState } from 'react'

type StaticCounterProps = {
  value: number
}

type StaticCounterComponent = React.FunctionComponent<StaticCounterProps>

export const StaticCounter: StaticCounterComponent = props => {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    if (value >= props.value) {
      return setValue(value - (value - props.value))
    }

    setTimeout(() => setValue(value + 5), 1)
  }, [value])

  return value
}
