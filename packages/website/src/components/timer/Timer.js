import React from 'react'
import { getTimeRemaining } from '@ace/common'

const Timer = ({
  endDate,
  startDate,
  hasEndedText = '',
  toBeStartedText = ''
}) => {
  const [time, setTime] = React.useState(() => {
    if (new Date(startDate) > new Date()) {
      return getTimeRemaining(new Date(startDate))
    } else if (new Date(endDate) > new Date()) {
      return 0 // if current date is after start date
    }
    return 1
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (new Date(startDate) > new Date()) {
        setTime(getTimeRemaining(new Date(startDate)))
      }
    }, 1000)
    return () => clearInterval(timer)
  })

  return (
    <div>
      {typeof time === 'object' ? (
        <>
          {time?.days} days {time?.hours} hours {time?.minutes} minutes{' '}
          {time?.seconds} seconds
        </>
      ) : time === 0 ? (
        <p>{toBeStartedText ?? 'Event has started'}</p>
      ) : (
        time === 1 && <p>{hasEndedText ?? 'Event has ended'}</p>
      )}
    </div>
  )
}

export default Timer
