import React, { useState } from 'react'
import {
  CounterValueWrapper,
  CounterValue,
  CounterValueSubtitle,
  CounterPlus,
} from './CounterElements'
import useCounter from '../../../hooks/useCounter'
import AnimateIn from '../../animations/AnimateIn'

const Counter = ({ e, startVal }) => {
  const [counter, setCounter] = useState(startVal ?? 0)
  const [intSplitArr, setIntSplitArr] = useState([])

  useCounter(() => {
    // Splits number and array from a string and removes filters Array values
    setIntSplitArr(e.numbers.text.split(/([0-9]+)/).filter(Boolean))
    if (counter !== parseInt(intSplitArr[0])) {
      setCounter(counter + 1)
    }
  }, 25)

  return (
    <AnimateIn once={true} duration={375}>
      <CounterValueWrapper>
        <CounterValue>
          {`${counter}${intSplitArr[1] ?? ''}`}
          <CounterPlus />
        </CounterValue>
        <CounterValueSubtitle>{e.numbers_subtitile.text}</CounterValueSubtitle>
      </CounterValueWrapper>
    </AnimateIn>
  )
}

export default React.memo(Counter)
