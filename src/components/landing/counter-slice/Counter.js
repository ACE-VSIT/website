import React, { useState } from "react"
import {
  CounterValueWrapper,
  CounterValue,
  CounterValueSubtitle,
  CounterPlus,
} from "./CounterElements"
import useCounter from "../../../hooks/useCounter"

const Counter = ({ e }) => {
  const [counter, setCounter] = useState(0)

  useCounter(() => {
    counter !== e.numbers && setCounter(counter + 1)
  }, 25)

  return (
    <CounterValueWrapper>
      <CounterValue>
        {counter}
        <CounterPlus />
      </CounterValue>
      <CounterValueSubtitle>{e.numbers_subtitile.text}</CounterValueSubtitle>
    </CounterValueWrapper>
  )
}

export default React.memo(Counter)
