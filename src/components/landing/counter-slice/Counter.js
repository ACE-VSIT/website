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
  const [intSplitArr, setIntSplitArr] = useState([])

  useCounter(() => {
    // Splits number and array from a string and removes filters Array values
    setIntSplitArr(e.numbers.text.split(/([0-9]+)/).filter(Boolean))
    if (counter !== parseInt(intSplitArr[0])) {
      setCounter(counter + 1)
    }
  }, 25)

  return (
    <CounterValueWrapper>
      <CounterValue>
        {`${counter} ${intSplitArr[1] ?? ""}`}
        <CounterPlus />
      </CounterValue>
      <CounterValueSubtitle>{e.numbers_subtitile.text}</CounterValueSubtitle>
    </CounterValueWrapper>
  )
}

export default React.memo(Counter)
