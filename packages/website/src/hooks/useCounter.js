import { useRef, useEffect } from 'react'

// Thanks to this https://stackoverflow.com/questions/53395147/use-react-hook-to-implement-a-self-increment-counter

export default function useCounter (callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const id = setInterval(() => {
      savedCallback.current()
    }, delay)
    return () => clearInterval(id)
  }, [delay])
}
